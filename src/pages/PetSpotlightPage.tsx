import { AppShell } from '@/components/layout/AppShell';
import { Camera, ArrowLeft, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuredPets, SpotlightPet } from '@/content/spotlight';
import { toast } from 'sonner';
import React from 'react';
const SpotlightHeader = () => (
  <header className="border-b-2 border-retro-magenta p-4 mb-8 text-center">
    <div className="flex items-center justify-center gap-4">
      <Camera className="w-10 h-10 text-retro-cyan animate-pulse" />
      <h1 className="text-5xl md:text-6xl font-pixel text-retro-magenta animate-glitch">
        Pet Spotlight
      </h1>
    </div>
    <p className="font-pixel text-retro-cyan text-lg md:text-xl mt-2">
      Maryland's Most Photogenic Felines
    </p>
  </header>
);
const PetCard = ({ pet }: { pet: SpotlightPet }) => (
  <div className="border-2 border-retro-cyan rounded-sm bg-black bg-opacity-20 p-4 flex flex-col text-center">
    <img
      src={pet.imageUrl}
      alt={`A photo of ${pet.name}`}
      className="w-full h-64 object-cover rounded-sm border-2 border-retro-magenta filter grayscale-[50%] sepia-[30%]"
    />
    <h3 className="font-pixel text-3xl text-retro-magenta mt-4">{pet.name}</h3>
    <p className="font-pixel text-xl text-retro-cyan my-2">Submitted by: {pet.owner}</p>
    <blockquote className="font-sans text-base text-gray-400 flex-grow mb-4 italic">"{pet.quote}"</blockquote>
  </div>
);
const SubmissionSection = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const petNameInput = form.elements.namedItem('petName') as HTMLInputElement;
    const ownerNameInput = form.elements.namedItem('ownerName') as HTMLInputElement;
    const petPhotoInput = form.elements.namedItem('petPhoto') as HTMLInputElement;
    if (petNameInput.value && ownerNameInput.value && petPhotoInput.files && petPhotoInput.files.length > 0) {
      toast.success("Thanks for your submission!", {
        description: "We'll review your pet's photo for a future spotlight.",
      });
      form.reset();
    } else {
      toast.error("Please fill out all fields!", {
        description: "We need a name, your name, and a photo to feature your pet.",
      });
    }
  };
  return (
    <div className="mt-16 border-t-2 border-retro-magenta pt-8">
      <h2 className="text-3xl md:text-4xl font-pixel text-retro-cyan mb-4 text-center">Submit Your Pet!</h2>
      <p className="font-sans text-lg text-retro-cyan text-center max-w-2xl mx-auto">
        Want to see your cat featured here? Submit their photo for a chance to be in next week's spotlight! Every Sunday, we select three new photos to showcase to the CatoSphere community.
      </p>
      <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto font-pixel text-lg space-y-4">
        <div>
          <label htmlFor="petName" className="block mb-2 text-retro-cyan">Pet's Name:</label>
          <input type="text" id="petName" name="petName" className="w-full bg-retro-purple border-2 border-retro-cyan rounded-sm px-4 py-2 text-retro-cyan placeholder:text-retro-cyan/50 focus:outline-none focus:ring-2 focus:ring-retro-magenta" />
        </div>
        <div>
          <label htmlFor="ownerName" className="block mb-2 text-retro-cyan">Your Name:</label>
          <input type="text" id="ownerName" name="ownerName" className="w-full bg-retro-purple border-2 border-retro-cyan rounded-sm px-4 py-2 text-retro-cyan placeholder:text-retro-cyan/50 focus:outline-none focus:ring-2 focus:ring-retro-magenta" />
        </div>
        <div>
          <label htmlFor="petPhoto" className="block mb-2 text-retro-cyan">Pet's Photo:</label>
          <div className="relative border-2 border-dashed border-retro-cyan rounded-sm p-4 text-center cursor-pointer hover:border-retro-magenta">
            <Upload className="w-8 h-8 mx-auto text-retro-magenta" />
            <p className="mt-2 text-retro-cyan">Click to upload a file</p>
            <input type="file" id="petPhoto" name="petPhoto" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*" />
          </div>
        </div>
        <button type="submit" className="w-full font-pixel text-xl bg-retro-magenta text-retro-purple p-2 mt-4 rounded-sm hover:bg-retro-cyan hover:text-retro-purple active:translate-y-px active:translate-x-px">
          SUBMIT FOR REVIEW
        </button>
      </form>
    </div>
  );
};
export function PetSpotlightPage() {
  return (
    <AppShell>
      <div className="border-2 border-retro-magenta p-4 sm:p-6 lg:p-8 rounded-sm shadow-[8px_8px_0px_0px_rgba(0,255,255,1)]">
        <SpotlightHeader />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
        <SubmissionSection />
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-pixel text-xl text-retro-cyan hover:text-retro-magenta"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Resource Hub
          </Link>
        </div>
      </div>
    </AppShell>
  );
}