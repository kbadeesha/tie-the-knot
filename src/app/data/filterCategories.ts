import { FilterCategory } from "../types/filter";

export const filterCategories: Record<string, FilterCategory[]> = {
  venue: [
    {
      name: 'Price',
      filterKey: 'price',
      type: 'price',
    },
    {
      name: 'Availability',
      filterKey: 'availability',
      type: 'availability',
    },
    {
      name: 'Capacity',
      filterKey: 'capacity',
      type: 'capacity',
    },
    {
      name: 'Indoor/outdoor',
      filterKey: 'indoorOutdoor',
      type: 'indoor-outdoor',
    },
    {
      name: 'Venue type',
      filterKey: 'venueType',
      type: 'venue-type',
    },
    {
      name: 'Included',
      filterKey: 'included',
      type: 'included',
    },
    {
      name: 'Award winners',
      filterKey: 'awardWinners',
      type: 'award-winners',
    },
    {
      name: 'Amenities',
      filterKey: 'amenities',
      type: 'amenities',
    },
    {
      name: 'Event types',
      filterKey: 'eventTypes',
      type: 'event-types',
    },
  ],
  photographer: [
    {
      name: 'Price',
      filterKey: 'price',
      type: 'price',
    }, 
    {
      name: 'Photography Style',
      filterKey: 'photographyStyle',
      type: 'dropdown',
      options: [
        { value: 'traditional', label: 'Traditional' },
        { value: 'photojournalistic', label: 'Photojournalistic' },
        { value: 'fineArt', label: 'Fine Art' },
        { value: 'modern', label: 'Modern/Contemporary' },
        { value: 'lifestyle', label: 'Lifestyle' },
        { value: 'vintage', label: 'Vintage/Retro' },
      ],
    },
    {
      name: 'Services',
      filterKey: 'services',
      type: 'dropdown',
      options: [
        { value: 'wedding', label: 'Wedding Photography' },
        { value: 'portrait', label: 'Portrait Photography' },
        { value: 'event', label: 'Event Photography' },
        { value: 'commercial', label: 'Commercial Photography' },
      ],
    },
    {
      name: 'Location',
      filterKey: 'location',
      type: 'location', // This will now be valid
    },
    {
      name: 'Availability',
      filterKey: 'availability',
      type: 'availability',
    },
    {
      name: 'Award winners',
      filterKey: 'awardWinners',
      type: 'checkbox',
    },
    {
      name: 'Photo format',
      filterKey: 'photoFormat',
      type: 'dropdown',
      options: [
        { value: 'digital', label: 'Digital Files' },
        { value: 'prints', label: 'Prints' },
        { value: 'albums', label: 'Albums' },
      ],
    },
    {
      name: "What you'll get",
      filterKey: 'whatYouGet',
      type: 'dropdown',
      options: [
        { value: 'onlineGallery', label: 'Online Gallery' },
        { value: 'printRelease', label: 'Print Release' },
        { value: 'secondShooter', label: 'Second Shooter' },
      ],
    },
    {
      name: 'Experience',
      filterKey: 'experience',
      type: 'dropdown', 
      options: [
        { value: '0-5', label: '0-5 years' },
        { value: '5-10', label: '5-10 years' },
        { value: '10+', label: '10+ years' },
      ],
    },
  ],
  // ... filter categories for other vendor types
};
