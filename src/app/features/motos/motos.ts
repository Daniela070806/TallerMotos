import { Component, inject, signal, OnInit } from '@angular/core';
import { MotoService } from '../../services/moto-service';
import { Moto } from '../../model/moto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-motos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './motos.html',
  styleUrls: ['./motos.css'],
})
export class Motos implements OnInit {
  private servicioMoto = inject(MotoService);
    
    listaMotos = signal<Moto[]>([]);
  
    nuevaMoto: Moto = {
      marca: '',
      cilindraje: 0,
      color: ''
    };
    
    ngOnInit(){
      this.obtenerMotos();
    }
  
    //Método obtenerUsuarios
    obtenerMotos(){
      this.servicioMoto.getMotos().subscribe(datosMotos=>{
        this.listaMotos.set(datosMotos)
      });
    }
  
    //Método eliminarUsuario
    eliminarMoto(id:number){
        this.servicioMoto.deleteMoto(id).subscribe(()=>{
          this.obtenerMotos();
        })
      }
    
  seleccionarParaEditar(moto: Moto){
    this.nuevaMoto = { ...moto };
  }
  
    //Método guardarUsuario
    guardarMoto(){
      if(this.nuevaMoto.id){
        this.servicioMoto.putMoto(this.nuevaMoto.id, this.nuevaMoto).subscribe(()=>{
          this.obtenerMotos();
          this.resetear();
        });
      }else{
      this.servicioMoto.postMoto(this.nuevaMoto).subscribe(()=>{
        this.obtenerMotos();
        this.resetear();
      });
    }
  }
  //Método para limpiar el formulario
  resetear(){
  this.nuevaMoto={marca:'', cilindraje:0, color:''};
  }
}