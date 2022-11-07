package br.com.pucminas.sistemamoedaestudantil.controllers;

import br.com.pucminas.sistemamoedaestudantil.entities.Vantagem;
import br.com.pucminas.sistemamoedaestudantil.services.VantagemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(path = "/api/vantagem")
public class VantagemControler {

    @Autowired
    VantagemService service;

    @GetMapping(value = "/listar")
    public ResponseEntity listar(){
        List<Vantagem> list = service.findAll();
        if (list.isEmpty())
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Nenhuma vantagem encontrada.");
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/mostrar/id/{id}")
    public ResponseEntity<Vantagem> show(@PathVariable Integer id) {
        Vantagem obj = service.getById(id);
        return ResponseEntity.ok().body(obj);
    }

    @PostMapping(value = "/cadastrar")
    public ResponseEntity insert (@RequestBody Vantagem dto) {
        ResponseEntity resp = service.insert(dto);
        return resp;
    }

    @DeleteMapping(value = "/deletar/id/{id}")
    public void  delete (@PathVariable Integer id) {
        service.deleteById(id);
    }

    @PutMapping  (value = "/update/id/{id}")
    public ResponseEntity update (@PathVariable Integer id,@RequestBody Vantagem obj ) throws Exception {
        Vantagem vantagemAtualizada = service.update(id,obj);
        return ResponseEntity.ok().body(vantagemAtualizada);

    }

}
