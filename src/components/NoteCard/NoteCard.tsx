import React from 'react';

interface Note {
    id: number;
    content: string;
}

interface NoteCardProps {
    note: Note;
    onDelete: (id: number) => void;
}

export const NoteCard: React.FC<NoteCardProps> = ({ note, onDelete }) => {
    return (
        <div className="note-card">
            <p>{note.content}</p>
            <button onClick={() => onDelete(note.id)}>X</button>
        </div>
    );
};

