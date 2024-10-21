import React, { useState, useEffect } from 'react';
import { NoteForm } from './components/NoteForm/NoteForm';
import { NotesList } from './components/NoteList/NoteList';

interface Note {
  id: number;
  content: string;
}

export const App: React.FC = () => {
    const [notes, setNotes] = useState<Note[]>([]);

    // Получение списка заметок
    const fetchNotes = async () => {
        try {
        const response = await fetch('http://localhost:7070/notes');
        const data = await response.json();
        setNotes(data);
        } catch (error) {
        console.error('Ошибка при получении заметок:', error);
        }
    };

    // Загружаем заметки при монтировании компонента
    useEffect(() => {
        fetchNotes();
    }, []);

    // Добавление новой заметки
    const addNote = async (content: string) => {
        try {
        await fetch('http://localhost:7070/notes', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content }),
        });

        // Обновляем список после добавления
        fetchNotes();
        } catch (error) {
        console.error('Ошибка при добавлении заметки:', error);
        }
    };

    // Удаление заметки
    const deleteNote = async (id: number) => {
        try {
        await fetch(`http://localhost:7070/notes/${id}`, {
            method: 'DELETE',
        });

        // Обновляем список после удаления
        fetchNotes();
        } catch (error) {
        console.error('Ошибка при удалении заметки:', error);
        }
    };

    return (
        <div className="notes">
            <div className='notes-enter'>
                <h1>Notes</h1>    
                <button onClick={fetchNotes}>Обновить</button>
            </div>
            <NotesList notes={notes} onDelete={deleteNote} />
            <NoteForm onAdd={addNote} />
        </div>
    );
};
