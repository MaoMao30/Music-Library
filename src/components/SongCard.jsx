import React from 'react';
import { Trash2, Edit2, Save, X } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SongCard = ({ 
  song, 
  isEditing, 
  editForm, 
  onEdit, 
  onSave, 
  onCancel, 
  onDelete, 
  onEditFormChange 
}) => {
  return (
    <Card>
      <CardHeader>
        <img
          src={song.imageUrl || "/api/placeholder/300/300"}
          alt={song.songTitle}
          className="w-full h-48 object-cover rounded-lg"
        />
      </CardHeader>
      
      <CardContent>
        {isEditing ? (
          <div className="space-y-2">
            <Input
              value={editForm.artistName}
              onChange={e => onEditFormChange({...editForm, artistName: e.target.value})}
              placeholder="Artist Name"
            />
            <Input
              value={editForm.songTitle}
              onChange={e => onEditFormChange({...editForm, songTitle: e.target.value})}
              placeholder="Song Title"
            />
            <Input
              value={editForm.genre}
              onChange={e => onEditFormChange({...editForm, genre: e.target.value})}
              placeholder="Genre"
            />
            <Input
              value={editForm.releaseYear}
              onChange={e => onEditFormChange({...editForm, releaseYear: e.target.value})}
              placeholder="Release Year"
              type="number"
            />
          </div>
        ) : (
          <div className="space-y-1">
            <h3 className="font-bold text-lg">{song.songTitle}</h3>
            <p className="text-gray-600">{song.artistName}</p>
            <p className="text-sm text-gray-500">Genre: {song.genre}</p>
            <p className="text-sm text-gray-500">Released: {song.releaseYear}</p>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-end gap-2">
        {isEditing ? (
          <>
            <Button
              size="sm"
              onClick={() => onSave(song.id)}
              className="flex items-center gap-1"
            >
              <Save size={16} /> Save
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={onCancel}
              className="flex items-center gap-1"
            >
              <X size={16} /> Cancel
            </Button>
          </>
        ) : (
          <>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onEdit(song)}
              className="flex items-center gap-1"
            >
              <Edit2 size={16} /> Edit
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => onDelete(song.id)}
              className="flex items-center gap-1"
            >
              <Trash2 size={16} /> Delete
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
};

export default SongCard;