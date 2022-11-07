package br.com.pucminas.sistemamoedaestudantil.services;

import br.com.pucminas.sistemamoedaestudantil.entities.Vantagem;
import br.com.pucminas.sistemamoedaestudantil.repositories.VantagemRepository;
import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class VantagemService {

    @Autowired
    private VantagemRepository repository;

    @Transactional
    public List<Vantagem> findAll(){
        List<Vantagem> listResponse = repository.findAll();
        return listResponse;
    }

    @Transactional
    public Vantagem getById(Integer id){
        Optional<Vantagem> obj = repository.findById(id);
        return obj.orElseThrow(()-> new ObjectNotFoundException(1,
                "Vantagem não encontrada.\n Id: " + id));
    }

    @Transactional
    public ResponseEntity<Vantagem> insert(Vantagem obj){
        Vantagem resp = repository.save(obj);
        return ResponseEntity.ok().body(resp);
    }

    @Transactional
    public void deleteById(Integer id){
        getById(id);
        try{
            repository.deleteById(id);
        }catch(DataIntegrityViolationException e){
            throw new DataIntegrityViolationException("Não foi possivel excluir esta vantagem.");
        }
    }
    @Transactional
    public Vantagem update(Integer id, Vantagem obj) {

        try{
            Vantagem newVantagem = repository.getReferenceById(id);
            newVantagem.setDescricao(obj.getDescricao());
            newVantagem.setImagem(obj.getImagem());
            newVantagem.setPreco(obj.getPreco());
            return repository.save(newVantagem);
        }catch(DataIntegrityViolationException e){
            throw new DataIntegrityViolationException("Não foi possivel editar esta vantagem.");
        }



    }

}
