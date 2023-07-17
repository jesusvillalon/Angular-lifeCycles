import { Component, OnInit,
   OnChanges, DoCheck, AfterContentInit,
   AfterContentChecked, AfterViewInit,
   AfterViewChecked,OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styles: [
  ]
})
export class ProductComponent implements OnInit, OnChanges,
 DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
 AfterViewChecked, OnDestroy {

  public isProductVisible: boolean = false;
  public currentPrice: number = 10;

  constructor() {
    console.log('Constructor')
  }
  // Lo utilizamos para algún tipo de inicialización, inyectar componentes
  // y no debemos hacer peticiones http aquí.

  ngOnInit(): void {
    console.log('ngOnInit')
  }
  // Lo podemos usar para hacer la primera petición http, para el método
  // subscribe, escuchar websocket, implementar timers.

  ngOnChanges(changes: SimpleChanges): void{
    console.log({changes})
    console.log('ngOnChanges')
  }
  // Lo usamos si necesitamos estar pendientes de los cambios de las
  // propiedades de los inputs que tenemos al principio del código.

  ngDoCheck(): void{
    console.log('ngDoCheck')
  }

  ngAfterContentInit(): void{
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked(): void{
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit(): void{
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked(): void{
    console.log('ngAfterViewChecked')
  }
  // 'DoCheck', 'AfterContentInit', 'AfterContentChecked',
  // 'AfterViewInit' y 'AfterViewChecked' se usan principalmente cuando
  // suceden cambios ya sean en inputs, propiedades, cuando el componente
  // detecta algún tipo de cambio. No se suelen usar mucho, a no ser que
  // usemos algún tipo de paquete.

  ngOnDestroy(): void{
    console.log('ngOnDestroy')
  }
  // Se utiliza para hacer limpiezas, en caso de se hayan creado listeners u
  // Observables o algún tipo de proceso que se ejecuta a lo largo de todo el
  // tiempo en el que el componente se muestre por pantalla.

  increasePrice(){
    this.currentPrice++;
  }
  decreasePrice(){
    this.currentPrice--;
  }

}
