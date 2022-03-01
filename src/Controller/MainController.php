<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function home(): Response
    {
        return $this->render('main/index.html.twig', [
            
        ]);
    }

    #[Route('/cansugars', name: 'app_cansugars')]
    public function cansugars(): Response
    {
        return $this->render('main/cansugars.html.twig', [
            
        ]);
    }

    #[Route('/about', name: 'app_about')]
    public function about(): Response
    {
        return $this->render('main/aboutus.html.twig', [
            
        ]);
    }

    #[Route('/cart', name: 'app_cart')]
    public function cart(): Response
    {
        return $this->render('main/cart.html.twig', [
            
        ]);
    }

    #[Route('/account', name: 'app_account')]
    public function account(): Response
    {
        return $this->render('main/account.html.twig', [
            
        ]);
    }

    #[Route('/login', name: 'app_login')]
    public function login(): Response
    {
        return $this->render('main/login.html.twig', [
            
        ]);
    }

    #[Route('/register', name: 'app_register')]
    public function register(): Response
    {
        return $this->render('main/register.html.twig', [
            
        ]);
    }
}
