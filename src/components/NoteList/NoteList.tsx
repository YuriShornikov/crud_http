import React from 'react';
import { NoteCard } from '../NoteCard/NoteCard';

interface Note {
    id: number;
    content: string;
}

interface NotesListProps {
    notes: Note[];
    onDelete: (id: number) => void;
}

export const NotesList: React.FC<NotesListProps> = ({ notes, onDelete }) => {
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <NoteCard key={note.id} note={note} onDelete={onDelete} />
            ))}
        </div>
    );
};
