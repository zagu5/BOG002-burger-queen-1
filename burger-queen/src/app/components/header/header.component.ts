import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectPerfil: boolean = false;
  perfil = JSON.parse(localStorage.getItem('user')!);
  rol: string = this.perfil.rol;
  image: string = this.perfil.photo ? this.perfil.photo : '../../../assets/image/Vector.png';

  constructor(public router: Router) { }


  showPerfil(): void {
    console.log('perfil', this.image);
    this.selectPerfil = !this.selectPerfil;
  }

  openPerfil(): void {
    this.router.navigateByUrl('/perfil')
  }

  signOut(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('login')
  }

  ngOnInit(): void { }

}
