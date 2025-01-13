import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const AddSongForm = ({ formData, onInputChange, onSubmit }) => {
  return (
    <div className="w-1/3 bg-background p-4 rounded-lg border">
      <form onSubmit={onSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Add New Music</h2>
        
        <div className="space-y-2">
          <Label htmlFor="artistName">Artist Name</Label>
          <Input
            id="artistName"
            name="artistName"
            value={formData.artistName}
            onChange={onInputChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="songTitle">Song Title</Label>
          <Input
            id="songTitle"
            name="songTitle"
            value={formData.songTitle}
            onChange={onInputChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="genre">Genre</Label>
          <Input
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={onInputChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={onInputChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="releaseYear">Release Year</Label>
          <Input
            id="releaseYear"
            name="releaseYear"
            value={formData.releaseYear}
            onChange={onInputChange}
            required
            type="number"
          />
        </div>

        <Button type="submit" className="w-full">
          Add Song
        </Button>
      </form>
    </div>
  );
};

export default AddSongForm;