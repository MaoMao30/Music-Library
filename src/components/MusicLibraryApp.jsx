import React, { useState } from 'react';
import AddSongForm from './AddSongForm';
import MusicLibrary from './MusicLibrary';

const MusicLibraryApp = () => {
  const [formData, setFormData] = useState({
    artistName: '',
    songTitle: '',
    genre: '',
    imageUrl: '',
    releaseYear: ''
  });
  
  const [musicLibrary, setMusicLibrary] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSong = {
      id: Date.now(),
      ...formData
    };
    setMusicLibrary(prev => [...prev, newSong]);
    setFormData({
      artistName: '',
      songTitle: '',
      genre: '',
      imageUrl: '',
      releaseYear: ''
    });
  };

  const handleDelete = (id) => {
    setMusicLibrary(prev => prev.filter(song => song.id !== id));
  };

  const handleEdit = (song) => {
    setEditingId(song.id);
    setEditForm(song);
  };

  const handleSaveEdit = (id) => {
    setMusicLibrary(prev => 
      prev.map(song => song.id === id ? editForm : song)
    );
    setEditingId(null);
    setEditForm({});
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  return (
    <div className="flex h-screen p-4 gap-4">
      <AddSongForm
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      <MusicLibrary
        musicLibrary={musicLibrary}
        editingId={editingId}
        editForm={editForm}
        onEdit={handleEdit}
        onSave={handleSaveEdit}
        onCancel={handleCancelEdit}
        onDelete={handleDelete}
        onEditFormChange={setEditForm}
      />
    </div>
  );
};

export default MusicLibraryApp;