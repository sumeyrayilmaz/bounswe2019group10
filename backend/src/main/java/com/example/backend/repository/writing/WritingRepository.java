package com.example.backend.repository.writing;

import com.example.backend.model.writing.Writing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WritingRepository  extends JpaRepository<Writing, Integer> {
}
