import React, { useState, FormEvent } from 'react';

interface NoteFormProps {
    onAdd: (content: string) => void;
}

export const NoteForm: React.FC<NoteFormProps> = ({ onAdd }) => {
    const [content, setContent] = useState<string>('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (content.trim()) {
            onAdd(content);
            setContent('');
        }
    };

    return (
        <form className='add' onSubmit={handleSubmit}>
            <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Введите заметку"
                required
            />
            <button type="submit">Добавить</button>
        </form>
    );
};
