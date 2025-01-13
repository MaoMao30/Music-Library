import React from 'react';
import SongCard from './SongCard';

const MusicLibrary = ({ 
  musicLibrary, 
  editingId, 
  editForm, 
  onEdit, 
  onSave, 
  onCancel, 
  onDelete, 
  onEditFormChange 
}) => {
  return (
    <div className="w-2/3 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Music Library</h2>
      <div className="grid grid-cols-2 gap-4">
        {musicLibrary.map(song => (
          <SongCard
            key={song.id}
            song={song}
            isEditing={editingId === song.id}
            editForm={editForm}
            onEdit={onEdit}
            onSave={onSave}
            onCancel={onCancel}
            onDelete={onDelete}
            onEditFormChange={onEditFormChange}
          />
        ))}
      </div>
    </div>
  );
};

export default MusicLibrary;