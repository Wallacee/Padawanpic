import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlataformDetectorService } from 'src/app/core/plataform-detector/plataform-detector.service';

@Component({
  templateUrl: './signin.component.html',
})
export class SiginComponent implements OnInit {
  loginForm: FormGroup = Object();
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement> = Object();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private plataformDetectorService: PlataformDetectorService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.authenticate(email, password).subscribe(
      (user: any) => {
        console.log(user);
        this.router.navigate(['user', user.userViewModel.id]);
      },
      (err) => {
        console.log(err);
        this.loginForm.reset();
        this.plataformDetectorService.isPlataformBrowser() &&
          this.emailInput.nativeElement.focus();
        //alert('Você é um merda!!');
      }
    );
  }
}
