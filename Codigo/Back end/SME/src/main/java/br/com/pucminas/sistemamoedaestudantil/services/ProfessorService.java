package br.com.pucminas.sistemamoedaestudantil.services;


import br.com.pucminas.sistemamoedaestudantil.dtos.request.ProfessorRequestDTO;
import br.com.pucminas.sistemamoedaestudantil.dtos.response.ProfessorResponseDTO;

import br.com.pucminas.sistemamoedaestudantil.entities.Professor;

import br.com.pucminas.sistemamoedaestudantil.repositories.ProfessorRepository;
import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProfessorService {
    @Autowired
    private ProfessorRepository repository;

    @Transactional
    public List<ProfessorResponseDTO> findAll(){
        List<Professor> listResponse = repository.findAll();
        return listResponse.stream().map(obj -> new ProfessorResponseDTO(obj)).collect(Collectors.toList());
    }

    @Transactional
    public Professor getById(Integer id) throws Exception {
        try{
            Optional<Professor> obj = repository.findById(id);
            return obj.orElseThrow(()-> new ObjectNotFoundException(1,
                    "Professor não encontrado.\n Id: " + id));
        }catch(Exception e){
            throw new Exception("Professor não encontrado");
        }
    }

    @Transactional
    public ResponseEntity<ProfessorRequestDTO> insert(ProfessorRequestDTO objDTO){
        Professor obj = repository.save(objDTO.build());
        return ResponseEntity.ok().body(new ProfessorRequestDTO(obj));
    }

    @Transactional
    public void deleteById(Integer id) throws Exception {
        getById(id);
        try{
            repository.deleteById(id);
        }catch(DataIntegrityViolationException e){
            throw new DataIntegrityViolationException("Não foi possivel excluir este professor.");
        }
    }

    public Professor update(Integer id, Professor obj) throws Exception {
        Professor newProfessor = getById(id);
        newProfessor.setCpf(obj.getCpf());
        newProfessor.setEmail(obj.getEmail());
        newProfessor.setNome(obj.getNome());
        //newAluno.setSenha(obj.getSenha());
        newProfessor.setMoedas(obj.getMoedas());
        return repository.save(newProfessor);
    }
}
