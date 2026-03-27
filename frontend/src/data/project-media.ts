/**
 * @file project-media.ts
 * @description Media catalog for project galleries grouped by category and subcategory.
 * @module frontend/src/data
 */

export type ProjectItem = {
  title: string;
  description: string;
  images: string[];
};

export type ProjectMediaCategory = {
  title: string;
  projects: ProjectItem[];
};

export const projectMediaCategories: ProjectMediaCategory[] = [
  {
    title: "Education",
    projects: [
      {
        title: "School Adoption",
        description:
          "Upgrading rural school infrastructure and learning spaces to improve access to quality education.",
        images: [
          "https://drive.google.com/file/d/1-r7_yKfA1VyE-UFXcAlFgVSCuOC5j4DK/preview",
          "https://drive.google.com/file/d/1qpW0yQc9FMwCK9g6NsyLpVMoOjrNwap_/preview",
          "https://drive.google.com/file/d/1fBODAvhjGXXSmiMJd85GwztVZ-oWMmFv/preview",
          "https://drive.google.com/file/d/1sfsVV8ogZ-ZNkfzIDTsvja14ZDeinqbB/preview",
          "https://drive.google.com/file/d/17RA8RZtiSkAb02dmtP_vp2uMiNVV2uds/preview",
          "https://drive.google.com/file/d/1_IPvuuHKt6jFVllrQWdS0HyMbDCEkWtg/preview",
        ],
      },
      {
        title: "Library",
        description:
          "Building and strengthening community and school libraries to promote reading habits and self-learning.",
        images: [
          "https://drive.google.com/file/d/1rgbj4qzbRJaEVlZ6FXhCYvJ-s0dY0iWL/preview",
          "https://drive.google.com/file/d/1HWqCi_D3H6gtTkXHLNlAH8JYFMP5r0zR/preview",
          "https://drive.google.com/file/d/191lSTP6yTvplHXjH3DalinjIas1gm4VE/preview",
          "https://drive.google.com/file/d/1wt-qMtWVCjItwm3oe4-Py19g23GnMLcb/preview",
        ],
      },
      {
        title: "School Of Excellence",
        description:
          "Long-term education quality improvements through campus upgrades, engagement, and student support programs.",
        images: [
          "https://drive.google.com/file/d/1G1TzaK5ZdiCYhEkCnLqF3vK0lu9j6LiZ/preview",
          "https://drive.google.com/file/d/1W8OrwmUPdnbjKuIXTu7ISUb8JKBVmia_/preview",
          "https://drive.google.com/file/d/1038f2DxIaViVPdiKdD_4swaZfPSn0Um-/preview",
          "https://drive.google.com/file/d/1_Thi2exl9-ZFizkbp1E7f3C6nDwbV_kf/preview",
          "https://drive.google.com/file/d/1959TTT07y5Ybf5YbEe2rsvNUusGO-QUb/preview",
          "https://drive.google.com/file/d/1H6nDoLTsfn4tkxI9MjUBkI5Hvn8UWw-Q/preview",
          "https://drive.google.com/file/d/1BTy4EkOSVJY1lQ0aKu9SRdYW5xAV7i1W/preview",
          "https://drive.google.com/file/d/1u3xfMVSXZ48DgJ6iq1PGXBzT3QW5xHhN/preview",
          "https://drive.google.com/file/d/1RibUvXtqwT-dA0IssiRXoUOXqVAAJ45B/preview",
          "https://drive.google.com/file/d/1rFuQG5GB9hsPs__AO8bSh5sX8b_-MkGB/preview",
          "https://drive.google.com/file/d/10_8G0n-Egw_gOgl1VY6KW0iWczvvFtIp/preview",
          "https://drive.google.com/file/d/1G6mf9LszCOBLeWhGRLcwKZUG6djIjWFN/preview",
          "https://drive.google.com/file/d/1BGxpPfzBwX1MiIOdovGUh4r7FCeyR_gg/preview",
          "https://drive.google.com/file/d/1PHJEjmHcp7od7WPqSRRfqZUCjud5TCuY/preview",
        ],
      },
    ],
  },
  {
    title: "Plastic Reduction",
    projects: [
      {
        title: "Plastic Reduction",
        description:
          "Reducing single-use plastics through awareness drives and practical alternatives in local communities.",
        images: [
          "https://drive.google.com/file/d/1AGWA-myggdhqmAOOuRxHHegSHnUOlAyP/preview",
          "https://drive.google.com/file/d/1Ox1FeJl4BSm9khgM2pW7BL1tUAGOPW-O/preview",
          "https://drive.google.com/file/d/1r0UnDjphj1SWpECmwP3hvmdOpNUzyJ3I/preview",
          "https://drive.google.com/file/d/1_SUdD8U7f8DDBAOvBK1MecUIcBh0R24H/preview",
          "https://drive.google.com/file/d/19Cb-bOlXiAN9QtdWOFYpSnX9dEZyoLOw/preview",
          "https://drive.google.com/file/d/1_IekHLMNVy0Mx-omnEGPrbdnuhEYc5AW/preview",
        ],
      },
    ],
  },
  {
    title: "Waste Management",
    projects: [
      {
        title: "Waste Management",
        description:
          "Promoting source segregation, cleaner public spaces, and community-led waste handling systems.",
        images: [
          "https://drive.google.com/file/d/1ckeDE2Bq343LASY3A186Aq-W83iUvAUd/preview",
          "https://drive.google.com/file/d/19BCWZtvjXQeAkmfsEcpmoux1VE3NMnUT/preview",
          "https://drive.google.com/file/d/1WuioqZ-34u0EeqIvDSLBau1Mt9jF477p/preview",
          "https://drive.google.com/file/d/1tdF7xAx1gdLDMSW3SytlfqLOcSAX2a-n/preview",
          "https://drive.google.com/file/d/1aXnnQ5C5OsyfXaKS5J39qal-oP0B4laT/preview",
          "https://drive.google.com/file/d/1FvjFvBGeWdHZb1kIPJq0MDtrAQFTGw9u/preview",
          "https://drive.google.com/file/d/1-WPSHueG8SEb4kF404-b4TuusN0TqzEF/preview",
          "https://drive.google.com/file/d/1OAFR8_UBpB5vHKRIjzHo-hxOwW0aPN3k/preview",
          "https://drive.google.com/file/d/1RhW8ZrwrlLFFDg8dYXwKWOLAsy0ocqFJ/preview",
          "https://drive.google.com/file/d/18X-grWE9qMZxjiozJNVb8trkzMo7FpSC/preview",
          "https://drive.google.com/file/d/1W5Aqu67wJHL1LKm1en2OWr51OGka9VDj/preview",
        ],
      },
    ],
  },
  {
    title: "Water Resources Management",
    projects: [
      {
        title: "Canal Cleaning",
        description:
          "Restoring water flow and improving sanitation by cleaning and maintaining local canal systems.",
        images: [
          "https://drive.google.com/file/d/1jC8KIxJ9Cpg82y0r-3uvZdAckqdKjiby/preview",
          "https://drive.google.com/file/d/1mljsl_A6-gyINV_OCiTFgj8ts66tjJuC/preview",
        ],
      },
      {
        title: "RHP Units - Market",
        description:
          "Deploying RHP units in market zones to improve cleanliness and responsible waste-water handling.",
        images: [
          "https://drive.google.com/file/d/122haIZ1vsQ7JjDH53aZSU-YNup8Jr9FC/preview",
          "https://drive.google.com/file/d/1MIfRVfIMklHxJGY2fe9P7qwH-HKHoQ42/preview",
          "https://drive.google.com/file/d/1vb7f1q7JtuFzwtFHBr3BtftbjPvWfyZz/preview",
          "https://drive.google.com/file/d/194-XxIJJS6HrjolcmJwabnzbbP8pyO9B/preview",
          "https://drive.google.com/file/d/1cfflc-zAC4zACi5DV8hBO-AbdmKvdiTi/preview",
        ],
      },
      {
        title: "RHP Units - School",
        description:
          "Installing RHP units in schools to support safer sanitation and sustainable hygiene practices.",
        images: [
          "https://drive.google.com/file/d/1yHbfwWafpTiZG3hiiYgCATZZg5hq3SD9/preview",
          "https://drive.google.com/file/d/1ZB6bAkgH-CigVrrYcmqIMbuLJ1qvMLJM/preview",
          "https://drive.google.com/file/d/15D9kR8CboWOXzLnG89uT8dB9oz9c_Rqh/preview",
        ],
      },
      {
        title: "RHP Units - Temple",
        description:
          "Extending RHP unit support to temple premises for cleaner, high-footfall public environments.",
        images: [
          "https://drive.google.com/file/d/1eY4ImZcAXWKTbYEg2nH6ZqJhwFjKOJoe/preview",
          "https://drive.google.com/file/d/1PqgK0hIhHD8Vyq5qGxaWleaCvBeNh5Rc/preview",
          "https://drive.google.com/file/d/1lvkvSWe6c0rGKguZ8HRi-jh1Y-Hgya5v/preview",
          "https://drive.google.com/file/d/1bLZhwxLpXVp8Vj58oVNg6qVA0DdjSuRH/preview",
          "https://drive.google.com/file/d/1HUHESiJ7i8_iQMMwds7t85VsqtohEUv4/preview",
          "https://drive.google.com/file/d/1_4a5i8gnLGJSNDG29aWw8J56rOBQ-845/preview",
          "https://drive.google.com/file/d/1g3HqXM-v1IifD18q11dYyj6MmTfJXTst/preview",
          "https://drive.google.com/file/d/1qOipzrzpvmKQQZ3mbvzSfo0I7gGdgINF/preview",
        ],
      },
    ],
  },
];