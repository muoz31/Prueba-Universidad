package com.onesystem.pruebatecnica.prueba.modelo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public abstract class Persona {
    private String nombreCompleto;
    private String identificacion;
    private String telefono;
    private String email;
    private String direccion;
    private String genero;

    public Persona(String identificacion,String nombreCompleto,String telefono,String email,String direccion,String genero) {
        this.identificacion = identificacion;
        this.nombreCompleto = nombreCompleto;
        this.telefono = telefono;
        this.email = email;
        this.direccion = direccion;
        this.genero = genero;
    }

    public abstract void comer();
    public abstract void descansar();

    @Override
    public String toString() {
        return "Persona{" +
                "nombreCompleto='" + nombreCompleto + '\'' +
                ", identificacion='" + identificacion + '\'' +
                ", telefono='" + telefono + '\'' +
                ", email='" + email + '\'' +
                ", direccion='" + direccion + '\'' +
                ", genero='" + genero + '\'' +
                '}';
    }
}
