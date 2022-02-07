import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes.service';
import { NewNote, Note } from './note';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  notesList: Observable<Note[]>;
  selected?: Note | NewNote;
  showError: boolean;

  constructor(private readonly notesService: NotesService) {}

  ngOnInit() {
    this.notesList = this.notesService.notes$;
  }

  selectNote(note: Note) {
    this.showError = false;
    this.selected = JSON.parse(JSON.stringify(note));
  }

  newNote() {
    this.showError = false;
    this.selected = createNewNote();
  }

  saveNote(note: Note | NewNote) {
    if (!note.title) {
      this.showError = true;
      return;
    }

    this.showError = false;
    this.notesService.saveNote(note).subscribe();
  }
}

function createNewNote(): NewNote {
  return { title: '', body: '', color: '', favorite: false };
}
