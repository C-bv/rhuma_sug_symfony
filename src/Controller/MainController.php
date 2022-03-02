<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Product;
use Doctrine\Persistence\ManagerRegistry;

class MainController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function home(ManagerRegistry $doctrine): Response
    {
        $products = $doctrine->getRepository(Product::class)->findBy(
            ['categorie' => 1]
        );

        if (!$products) {
            throw $this->createNotFoundException(
                'No product found'
            );
        }
        $response = new Response(json_encode($products));
        $response->headers->set('Content-Type', 'application/json');

        // return $response;

        return $this->render('main/index.html.twig', [
            'products' => $products,
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

    #[Route('/register', name: 'app_register')]
    public function register(): Response
    {
        return $this->render('main/register.html.twig', [
            
        ]);
    }
}
