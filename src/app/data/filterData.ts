// [_____________ VENUE _____________]

const VENUE_EVENT_SPACES = [
  {
    id: "indoor",
    value: "indoor",
    label: "Indoor",
  },
  {
    id: "outdoor",
    value: "outdoor",
    label: "Outdoor",
  },
  {
    id: "rooftop",
    value: "rooftop",
    label: "Rooftop",
  },
  {
    id: "garden",
    value: "garden",
    label: "Garden",
  },
];

const VENUE_CAPACITY = [
  {
    id: "small",
    value: "small",
    label: "Small, Intimate Gathering (50 -100 guests)",
  },
  {
    id: "medium",
    value: "medium",
    label: "Medium, Medium Wedding (100 - 250 guests)",
  },
  {
    id: "large",
    value: "large",
    label: "Large, Larger Wedding (250 - 350 guests)",
  },
  {
    id: "grand",
    value: "grand",
    label: "Grand, Grand Scale Event (350+ guests)",
  },
];

const VENUE_AMBIANCE = [
  {
    id: "rustic",
    value: "rustic",
    label: "Rustic",
  },
  {
    id: "modern",
    value: "modern",
    label: "Modern",
  },
  {
    id: "classic",
    value: "classic",
    label: "Classic",
  },
  {
    id: "industrial",
    value: "industrial",
    label: "Industrial",
  },
  {
    id: "beachside",
    value: "beachside",
    label: "Beachside",
  },
  {
    id: "mountain_forest_view",
    value: "mountain_forest_view",
    label: "Mountain/Forest View",
  },
];

const VENUE_AMENITIES = [
  {
    id: "catering",
    value: "catering",
    label: "Catering",
  },
  {
    id: "buffet",
    value: "buffet",
    label: "Buffet",
  },
  {
    id: "bar_services",
    value: "bar_services",
    label: "Bar Services",
  },
  {
    id: "bridal_suite",
    value: "bridal_suite",
    label: "Bridal Suite",
  },
  {
    id: "parking",
    value: "parking",
    label: "Parking",
  },
  {
    id: "valet_service",
    value: "valet_service",
    label: "Valet Service",
  },
  {
    id: "wheelchair_accessible",
    value: "wheelchair_accessible",
    label: "Wheelchair Accessible",
  },
  {
    id: "pet_friendly",
    value: "pet_friendly",
    label: "Pet-Friendly",
  },
];

const VENUE_BAR_SERVICES = [
  {
    id: "open_bar",
    value: "open_bar",
    label: "Open Bar",
  },
  {
    id: "cash_bar",
    value: "cash_bar",
    label: "Cash Bar",
  },
];

const VENUE_COUPLES_STAY_PACKAGES = [
  {
    id: "honeymoon_suite",
    value: "honeymoon_suite",
    label: "Honeymoon Suite",
  },
  {
    id: "complimentary_night_for_couple",
    value: "complimentary_night_for_couple",
    label: "Complimentary Night for the Couple",
  },
  {
    id: "early_checkin_late_checkout",
    value: "early_checkin_late_checkout",
    label: "Early Check-In and Late Check-Out Options",
  },
  {
    id: "in_room_breakfast_champagne",
    value: "in_room_breakfast_champagne",
    label: "In-room Breakfast/Champagne Service",
  },
  {
    id: "post_wedding_brunch",
    value: "post_wedding_brunch",
    label: "Post-wedding Brunch or Breakfast Option",
  },
  {
    id: "discounted_rates_for_family",
    value: "discounted_rates_for_family",
    label: "Discounted Rates for Family",
  },
];
const VENUE_ADDITIONAL_EQUIPMENT = [
  {
    id: "generators",
    value: "generators",
    label: "Generators",
  },
  {
    id: "climate_control_cooling",
    value: "climate_control_cooling",
    label: "Climate Control - Cooling",
  },
  {
    id: "tents_canopies",
    value: "tents_canopies",
    label: "Tents and Canopies",
  },
  {
    id: "stage_dance_floor",
    value: "stage_dance_floor",
    label: "Stage and Dance Floor",
  },
  {
    id: "projectors",
    value: "projectors",
    label: "Projectors",
  },
  {
    id: "microphones",
    value: "microphones",
    label: "Microphones",
  },
  {
    id: "cake_table",
    value: "cake_table",
    label: "Cake Table",
  },
  {
    id: "gift_table",
    value: "gift_table",
    label: "Gift Table",
  },
];
export const VENUE_FILTERS = [
  {
    heading: "Event Space",
    description: "Select the type of event space you're looking for",
    data: VENUE_EVENT_SPACES,
  },
  {
    heading: "Venue Capacity",
    description: "Select the type of capacity you're looking for",
    data: VENUE_CAPACITY,
  },
  {
    heading: "Ambiance",
    description: "Select the ambiance you're looking for",
    data: VENUE_AMBIANCE,
  },
  {
    heading: "Amenities",
    description: "Select the amenities that best suit your needs",
    data: VENUE_AMENITIES,
  },
  {
    heading: "Bar Services",
    description: "Select the bar services that best suit your needs",
    data: VENUE_BAR_SERVICES,
  },
  {
    heading: "Couple's Stay Packages",
    description: "Select the couple stay services that best suit your needs",
    data: VENUE_COUPLES_STAY_PACKAGES,
  },
  {
    heading: "Additional Equipment",
    description: "Select the additional services that best suit your needs",
    data: VENUE_ADDITIONAL_EQUIPMENT,
  },
];

// [_____________ PHOTOGRAPHER _____________]

const PHOTOGRAPHER_EVENT_COVERAGE = [
  {
    id: "wedding_day_coverage",
    value: "wedding_day_coverage",
    label: "Wedding Day Coverage",
  },
  {
    id: "engagement_session_coverage",
    value: "engagement_session_coverage",
    label: "Engagement Session Coverage",
  },
  {
    id: "homecoming_session_coverage",
    value: "homecoming_session_coverage",
    label: "Homecoming Session Coverage",
  },
  {
    id: "proposal_session_coverage",
    value: "proposal_session_coverage",
    label: "Proposal Session Coverage",
  },
  {
    id: "bachelor_bachelorette_party_session_coverage",
    value: "bachelor_bachelorette_party_session_coverage",
    label: "Bachelor/Bachelorette Party Session Coverage",
  },
  {
    id: "wedding_pre_shoot_session_coverage",
    value: "wedding_pre_shoot_session_coverage",
    label: "Wedding Pre Shoot Session Coverage",
  },
];

const PHOTOGRAPHER_ADD_ONS_AND_EXTRA = [
  {
    id: "second_shooter",
    value: "second_shooter",
    label: "Second Shooter",
  },
  {
    id: "photo_booth",
    value: "photo_booth",
    label: "Photo Booth",
  },
  {
    id: "drone_photography",
    value: "drone_photography",
    label: "Drone Photography",
  },
  {
    id: "digital_Photo_gallery",
    value: "digital_Photo_gallery",
    label: "Digital Photo Gallery",
  },
  {
    id: "rush_editing_service",
    value: "rush_editing_service",
    label: "Rush Editing Service",
  },
  {
    id: "additional_hours_of_coverage",
    value: "additional_hours_of_coverage",
    label: "Additional Hours of Coverage",
  },
];

const PHOTOGRAPHER_COVERAGE_OPTIONS = [
  {
    id: "half_day_coverage",
    value: "half_day_coverage",
    label: "Half-Day Coverage (up to 4 hours)",
  },
  {
    id: "full_day_coverage",
    value: "full_day_coverage",
    label: "Full-Day Coverage (up to 8 hours)",
  },
  {
    id: "extended_coverage",
    value: "extended_coverage",
    label: "Extended Coverage (8+ hours or multi-day)",
  },
  {
    id: "destination_wedding_coverage",
    value: "destination_wedding_coverage",
    label: "Destination Wedding Coverage",
  },
];

const PHOTOGRAPHER_POST_EVENT_SERVICES = [
  {
    id: "photo_albums_and_printed_products",
    value: "photo_albums_and_printed_products",
    label: "Photo Albums and Printed Products",
  },
  {
    id: "digital_access",
    value: "digital_access",
    label: "Digital Access (online gallery or USB)",
  },
  {
    id: "slideshow_highlight_reel",
    value: "slideshow_highlight_reel",
    label: "Slideshow/Highlight Reel",
  },
  {
    id: "social_media_snippets",
    value: "social_media_snippets",
    label: "Social Media Snippets",
  },
  {
    id: "edited_highlights",
    value: "edited_highlights",
    label: "Edited Highlights (select high-quality images)",
  },
  {
    id: "thank_you_cards",
    value: "thank_you_cards",
    label: "Thank You Cards",
  },
];

export const PHOTOGRAPHER_FILTERS = [
  {
    heading: "Event Coverage",
    description: "Select the type of event coverage option you're looking for",
    data: PHOTOGRAPHER_EVENT_COVERAGE,
  },
  {
    heading: "Add-Ons and Extra",
    description: "Select the type of Add-ons option you're looking for",
    data: PHOTOGRAPHER_ADD_ONS_AND_EXTRA,
  },
  {
    heading: "Coverage",
    description: "Select the type of coverage option you're looking for",
    data: PHOTOGRAPHER_COVERAGE_OPTIONS,
  },
  {
    heading: "Post-Event Services",
    description:
      "Select the type of post-event service option you're looking for",
    data: PHOTOGRAPHER_POST_EVENT_SERVICES,
  },
];

// [_____________ VIDEOGRAPHER _____________]

const VIDEOGRAPHER_EVENT_COVERAGE = [
  {
    id: "full_wedding_day_coverage",
    value: "full_wedding_day_coverage",
    label: "Full Wedding Day Coverage (Ceremony and Reception)",
  },
  {
    id: "wedding_day_highlights",
    value: "wedding_day_highlights",
    label: "Wedding Day Highlights",
  },
  {
    id: "engagement_session_video",
    value: "engagement_session_video",
    label: "Engagement Session Video",
  },
  {
    id: "homecoming_coverage",
    value: "homecoming_coverage",
    label: "Homecoming Coverage",
  },
  {
    id: "proposal_video",
    value: "proposal_video",
    label: "Proposal Video",
  },
  {
    id: "bachelor_bachelorette_party_coverage",
    value: "bachelor_bachelorette_party_coverage",
    label: "Bachelor/Bachelorette Party Coverage",
  },
  {
    id: "wedding_trailer",
    value: "wedding_trailer",
    label: "Wedding Trailer",
  },
  {
    id: "wedding_pre_shoot_video",
    value: "wedding_pre_shoot_video",
    label: "Wedding Pre Shoot Video",
  },
];

const VIDEOGRAPHER_PACKAGE_OPTIONS = [
  {
    id: "hihlight_video",
    value: "hihlight_video",
    label: "Highlight Video (3-5 minutes)",
  },
  {
    id: "full_length_edit",
    value: "full_length_edit",
    label: "Full-Length Edit (20+ minutes)",
  },
  {
    id: "ceremony_only_coverage",
    value: "ceremony_only_coverage",
    label: "Ceremony Only Coverage",
  },
  {
    id: "reception_only_coverage",
    value: "reception_only_coverage",
    label: "Reception Only Coverage",
  },
  {
    id: "social_media_teaser",
    value: "social_media_teaser",
    label: "Social Media Teaser (1-minute or less for quick sharing)",
  },
  {
    id: "documentry_film",
    value: "documentry_film",
    label: "Documentary Film (extended, full wedding)",
  },
  {
    id: "audio_capture",
    value: "audio_capture",
    label: "Audio Capture (toasts, vows)",
  },
];

const VIDEOGRAPHER_ADDONS = [
  {
    id: "drone_footage",
    value: "drone_footage",
    label: "Drone Footage",
  },
  {
    id: "multi_camera_setup",
    value: "multi_camera_setup",
    label: "Multi-Camera Setup",
  },
  {
    id: "second_videographer",
    value: "second_videographer",
    label: "Second Videographer",
  },
  {
    id: "same_day_edit",
    value: "same_day_edit",
    label: "Same-Day Edit (to show at the reception)",
  },
  {
    id: "slow_motion_special_effects",
    value: "slow_motion_special_effects",
    label: "Slow Motion and Special Effects",
  },
  {
    id: "streaming",
    value: "streaming",
    label: "Streaming",
  },
  {
    id: "360-degree_video",
    value: "360-degree_video",
    label: "360-Degree Video",
  },
];

const VIDEOGRAPHER_DELIVERABLES = [
  {
    id: "usb_or_diital_download",
    value: "usb_or_diital_download",
    label: "USB or Digital Download",
  },
  {
    id: "online_gallery_streaming_link",
    value: "online_gallery_streaming_link",
    label: "Online Gallery/Streaming Link",
  },
  {
    id: "dvds_blu_rays",
    value: "dvds_blu_rays",
    label: "DVDs/Blu-rays",
  },
  {
    id: "4k_or_hd_quality_options",
    value: "4k_or_hd_quality_options",
    label: "4K or HD Quality Options",
  },
];

const VIDEOGRAPHER_PRICING = [
  {
    id: "hourly",
    value: "hourly",
    label: "Hourly",
  },
  {
    id: "pre_event",
    value: "pre_event",
    label: "Per-Event",
  },
];

export const VIDEOGRAPHER_FILTERS = [
  {
    heading: "Event Coverage Options",
    description: "Select the type of event coverage option you're looking for",
    data: VIDEOGRAPHER_EVENT_COVERAGE,
  },
  {
    heading: "Package Options",
    description: "Select the type of Package option you're looking for",
    data: VIDEOGRAPHER_PACKAGE_OPTIONS,
  },
  {
    heading: "Addons",
    description: "Select the type of Addons you're looking for",
    data: VIDEOGRAPHER_ADDONS,
  },
  {
    heading: "Deliverables",
    description: "Select the type of deliverables option you're looking for",
    data: VIDEOGRAPHER_DELIVERABLES,
  },
  {
    heading: "Pricing",
    description: "Select the type of pricing option you're looking for",
    data: VIDEOGRAPHER_PRICING,
  },
];

// [_____________ FLORIST _____________]

const FLORIST_SERVICE_LEVEL = [
  {
    id: "a_la_carte",
    value: "a_la_carte",
    label: "A La Cart",
  },
  {
    id: "full-service",
    value: "full_service",
    label: "Full Service",
  },
  {
    id: "wholesale",
    value: "wholesale",
    label: "Wholesale",
  },
];

const FLORIST_PRE_WEDDING_SERVICES = [
  {
    id: "consultations",
    value: "consultations",
    label: "Consultations",
  },
  {
    id: "mockups",
    value: "mockups",
    label: "Mockups",
  },
  {
    id: "venue_visits",
    value: "venue_visits",
    label: "Venue Visits",
  },
  {
    id: "custom_designs",
    value: "custom_designs",
    label: "Custom Designs",
  },
];

const FLORIST_DAY_OF_WEDDING_SERVICES = [
  {
    id: "container_rentals",
    value: "container_rentals",
    label: "Container Rentals",
  },
  {
    id: "delivery",
    value: "delivery",
    label: "Delivery",
  },
  {
    id: "setup",
    value: "setup",
    label: "Setup",
  },
  {
    id: "decor_rentals",
    value: "decor_rentals",
    label: "Decor Rentals",
  },
  {
    id: "structure_rentals",
    value: "structure_rentals",
    label: "Structure Rentals",
  },
  {
    id: "furniture_rentals",
    value: "furniture_rentals",
    label: "Furniture Rentals",
  },
  {
    id: "mirror_rentals",
    value: "mirror_rentals",
    label: "Mirror Rentals",
  },
];

const FLORIST_POST_WEDDING_SERVICES = [
  {
    id: "cleanup",
    value: "cleanup",
    label: "Cleanup",
  },
  {
    id: "flower_preservations",
    value: "flower_preservations",
    label: "Flower Preservations",
  },
];

const FLORIST_ARRANGEMENTS = [
  {
    id: "bouquets",
    value: "bouquets",
    label: "Bouquets",
  },
  {
    id: "boutonnieres",
    value: "boutonnieres",
    label: "Boutonnieres",
  },
  {
    id: "corsages",
    value: "corsages ",
    label: "Corsages",
  },
  {
    id: "centerpieces",
    value: "centerpieces",
    label: "Centerpieces",
  },
  {
    id: "flower_crowns",
    value: "flower_crowns",
    label: "Flower Crowns",
  },
  {
    id: "flower_jewelry",
    value: "flower_jewelry",
    label: "Flower Jewelry",
  },
  {
    id: "table_runner",
    value: "table_runner",
    label: "Table Runner",
  },
  {
    id: "poruwa",
    value: "poruwa",
    label: "Poruwa",
  },
  {
    id: "oil_lamps",
    value: "oil_lamps",
    label: "Oil Lamps",
  },
  {
    id: "floral_arches",
    value: "floral_arches",
    label: "Floral Arches",
  },
  {
    id: "back_drops",
    value: "back_drops",
    label: "Back Drops",
  },
  {
    id: "entrance_decoration",
    value: "entrance_decoration",
    label: "Entrance Decoration",
  },
  {
    id: "head_table_decoration",
    value: "head_table_decoration",
    label: "Head Table Decoration (Retinue)",
  },
  {
    id: "settee_back",
    value: "settee_back",
    label: "Settee Back",
  },
];

export const FLORIST_FILTERS = [
  {
    heading: "florist service level",
    description:
      "Select the type of florist service level option you're looking for",
    data: FLORIST_SERVICE_LEVEL,
  },
  {
    heading: "florist service level",
    description:
      "Select the type of florist pre wedding services you're looking for",
    data: FLORIST_PRE_WEDDING_SERVICES,
  },
  {
    heading: "florist day of wedding services",
    description:
      "Select the type of florist day of wedding services you're looking for",
    data: FLORIST_DAY_OF_WEDDING_SERVICES,
  },
  {
    heading: "florist post wedding services",
    description:
      "Select the type of florist poat wedding services you're looking for",
    data: FLORIST_POST_WEDDING_SERVICES,
  },
  {
    heading: "florist arrangements",
    description: "Select the type of florist arrangements you're looking for",
    data: FLORIST_ARRANGEMENTS,
  },
];

// [_____________ CAKES _____________]

const CAKES_DESSERT_TYPES = [
  {
    id: "cakes",
    value: "cakes",
    label: "Cakes",
  },
  {
    id: "candy_confections",
    value: "candy_confections",
    label: "Candy & Confections",
  },
  {
    id: "cookies_macarons",
    value: "cookies_macarons",
    label: "Cookies & Macarons",
  },
  {
    id: "cupcakes",
    value: "cupcakes",
    label: "Cupcakes",
  },
  {
    id: "brownies",
    value: "brownies",
    label: "Brownies",
  },
  {
    id: "mini_desserts",
    value: "mini_desserts",
    label: "Mini Desserts",
  },
  {
    id: "pastries",
    value: "pastries",
    label: "Pastries",
  },
  {
    id: "frozen_desserts",
    value: "frozen_desserts",
    label: "Frozen Desserts",
  },
  {
    id: "puddings_and_custards",
    value: "puddings_and_custards",
    label: "Puddings and Custards",
  },
];

const CAKES_DIETARY_RESTRICTIONS = [
  {
    id: "dairy_free",
    value: "dairy_free",
    label: "Dairy Free",
  },
  {
    id: "gluten_free",
    value: "gairy_free",
    label: "Gluten Free",
  },
  {
    id: "dairy_free",
    value: "dairy_free",
    label: "Dairy Free",
  },
  {
    id: "halal",
    value: "halal",
    label: "Halal",
  },
  {
    id: "nut_free",
    value: "nut_free",
    label: "Nut Free",
  },
  {
    id: "sugar_free",
    value: "sugar_free",
    label: "Sugar Free",
  },
  {
    id: "vegan",
    value: "vegan",
    label: "Vegan",
  },
  {
    id: "vegetarian",
    value: "vegetarian",
    label: "Vegetarian",
  },
];

const CAKES_SERVICES = [
  {
    id: "taste_sessions",
    value: "taste_sessions",
    label: "Taste Sessions",
  },
  {
    id: "consultations",
    value: "consultations",
    label: "Consultations",
  },
  {
    id: "delivery",
    value: "delivery",
    label: "Delivery",
  },
  {
    id: "setup",
    value: "setup",
    label: "Setup",
  },
  {
    id: "dessert_installation",
    value: "dessert_installation",
    label: "Dessert Installation",
  },
  {
    id: "coffee_and_tea",
    value: "coffee_and_tea",
    label: "Coffee and Tea",
  },
  {
    id: "multiple_tiers_and_sizes",
    value: "multiple_tiers_and_sizes",
    label: "Multiple Tiers and Sizes",
  },
  {
    id: "theme_based_designs",
    value: "theme_based_designs",
    label: "Theme-Based Designs",
  },
  {
    id: "slicing_tools",
    value: "slicing_tools",
    label: "Slicing Tools",
  },
  {
    id: "edible_decorations",
    value: "edible_decorations",
    label: "Edible Decorations",
  },
];

export const CAKE_FILTERS = [
  {
    heading: "Dessert Types",
    description: "Select the type of dessert you're looking for",
    data: CAKES_DESSERT_TYPES,
  },
  {
    heading: "Dietary Restrictions",
    description: "Select the type of Dietary Restrictions you're looking for",
    data: CAKES_DIETARY_RESTRICTIONS,
  },
  {
    heading: "Dessert Types",
    description: "Select the type of dessert you're looking for",
    data: CAKES_DESSERT_TYPES,
  },
  {
    heading: "Services",
    description: "Select the type of services you're looking for",
    data: CAKES_SERVICES,
  },
];

// [_____________ BAND _____________]

// [_____________ MAKEUP _____________]

// [_____________ DESIGNER _____________]

// [_____________ PLANNER _____________]

// [_____________ RELIGIOUS _____________]

// [_____________ FURNITURE/RENTALS _____________]

// [_____________ LUXURY CARS _____________]
