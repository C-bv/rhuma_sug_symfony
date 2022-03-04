<?php

namespace App\Form;


use App\Entity\User;
use phpDocumentor\Reflection\PseudoTypes\NonEmptyString;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Mime\Email;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Regex;


class AccountInformationsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom', TextType::class, [
                'label' => false,
                'required' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter your last name',
                    ]),
                    new Regex([
                        'pattern' => "/[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/",
                        'message' => 'Please enter a valid last name',
                    ])
                ]
            ])
            ->add('prenom', TextType::class, [
                'label' => false,
                'required' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter your first name',
                    ]),
                    new Regex([
                        'pattern' => "/[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/",
                        'message' => 'Please enter a valid first name',
                    ])
                ]
            ])
            ->add('email', TextType::class, [
                'label' => false,
                'required' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter your email',
                    ]),
                ]
            ])
            ->add('tel', null, [
                'label' => false,
                'required' => false,
                'constraints' => [
                    new Regex([
                        'pattern' => "/((\+)33|0)[1-9](\d{2}){4}$/",
                        'message' => 'Please enter a valid phone number',
                    ])
                ]
            ])
            ->add('adresse', TextType::class, [
                'label' => false,
                'required' => false
            ])
            ->add('ville', TextType::class, [
                'label' => false,
                'required' => false
            ])
            ->add('cp', null, [
                'label' => false,
                'required' => false,
                'constraints' => [
                    new Regex([
                        'pattern' => "/(F-)?((2[A|B])|[0-9]{2})[0-9]{3}$/",
                        'message' => 'Please enter a valid postal code',
                    ])
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
