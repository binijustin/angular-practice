import { Directive, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective{
    constructor(private elRef : ElementRef, private renderer : Renderer2){};

    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }

}