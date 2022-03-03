<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Product;
use App\Repository\ProductRepository;
use App\Entity\Article;
use App\Repository\ArticleRepository;
use App\Entity\User;
use App\Repository\UserRepository;

class MainController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function rums(ProductRepository $productRepository): Response
    {
        $products = $productRepository->findBy(
            ['categorie' => 1]
        );

        return $this->render('main/index.html.twig', [
            'products' => $products
        ]);
    }

    #[Route('/cansugars', name: 'app_cansugars')]
    public function cansugars(ProductRepository $productRepository): Response
    {
        $products = $productRepository->findBy(
            ['categorie' => 2]
        );

        return $this->render('main/cansugars.html.twig', [
            'products' => $products
        ]);
    }

    #[Route('/about', name: 'app_about')]
    public function articles(ArticleRepository $articleRepository): Response
    {
        $articles = $articleRepository->findAll();

        return $this->render('main/aboutus.html.twig', [
            'articles' => $articles
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

    // #[Route('/register', name: 'app_register')]
    // public function register(): Response
    // {
    //     return $this->render('main/register.html.twig', [
            
    //     ]);
    // }
}
