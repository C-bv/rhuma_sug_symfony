<?php

namespace App\Controller;

use App\Entity\User;

use App\Form\RegistrationFormType;
use App\Form\AccountInformationsType;
use App\Form\PasswordChangeType;

use Doctrine\ORM\EntityManagerInterface;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;

use App\Security\LoginFormAuthenticator;


class SecurityController extends AbstractController
{
    #[Route('/register', name: 'app_register')]
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager): Response
    {        
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            
            $user->setPassword(
            $userPasswordHasher->hashPassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );

            $entityManager->persist($user);
            $entityManager->flush();

            return $this->redirectToRoute('app_login');
        }

        // Redirect to account if logged
        if($this->getUser()) {
            return $this->redirectToRoute('app_account');
        }
        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }

    #[Route('/login', name: 'app_login')]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        $error = $authenticationUtils->getLastAuthenticationError();
        $lastUsername = $authenticationUtils->getLastUsername();

        // Redirect to account if logged
        if($this->getUser()) {
            return $this->redirectToRoute('app_account');
        }    

        return $this->render('login/login.html.twig', [
            'lastUsername' =>  $lastUsername,
            'error' => $error,
        ]);
    }

    #[Route("/account", name: 'app_account')]
    public function edit(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager): Response
    {        
        $user = $this->getUser();
        $AccountInformationsForm = $this->createForm(AccountInformationsType::class, $user);
        $AccountInformationsForm->handleRequest($request);

        $passwordChangeForm = $this->createForm(PasswordChangeType::class, $user);
        $passwordChangeForm->handleRequest($request);
    
        if ($AccountInformationsForm->isSubmitted() && $AccountInformationsForm->isValid()) {
            
            $entityManager->persist($user);
            $entityManager->flush();
            
            return $this->redirectToRoute('app_account');
        }
        if ($passwordChangeForm->isSubmitted() && $passwordChangeForm->isValid()) {
    
            
            return $this->redirectToRoute('app_account');
        }
        return $this->render('main/account.html.twig', [
            'users' => $user,
            'accountForm' => $AccountInformationsForm->createView(),
            'passwordForm' => $passwordChangeForm->createView()
        ]);
    }
}
