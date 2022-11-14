package br.com.pucminas.sistemamoedaestudantil.controllers;

import br.com.pucminas.sistemamoedaestudantil.dtos.request.TransacaoRequestDTO;
import br.com.pucminas.sistemamoedaestudantil.dtos.request.VantagemRequestDTO;
import br.com.pucminas.sistemamoedaestudantil.dtos.response.ProfessorResponseDTO;
import br.com.pucminas.sistemamoedaestudantil.dtos.response.TransacaoResponseDTO;
import br.com.pucminas.sistemamoedaestudantil.entities.Vantagem;
import br.com.pucminas.sistemamoedaestudantil.services.TransacaoService;
import br.com.pucminas.sistemamoedaestudantil.services.VantagemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(path="/api/vantagem")
public class VantagemController {

    @Autowired
    private VantagemService service;


// TODO: Listar transacoes pelo Id do aluno/professor

    @GetMapping(value = "/listar")
    public ResponseEntity findAllVantagem(){
        List<Vantagem> list = service.listarVantagem();
        if(list.isEmpty())
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Nenhuma vantagem encontrada");
        return ResponseEntity.ok().body(list);
    }


    @GetMapping(value = "/mostrar/id/{id}")
    public ResponseEntity findVantagem(@PathVariable Integer id){
        List<Vantagem> list = service.listarVantagem();
        if(list.isEmpty())
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Nenhuma vantagem encontrada");
        return ResponseEntity.ok().body(list);
    }

    @PostMapping(value = "/cadastrar")
    public ResponseEntity findAllListagens(@RequestBody VantagemRequestDTO objDto) {

        service.addVantagem(objDto);

        return ResponseEntity.ok().body(objDto);
    }

}
