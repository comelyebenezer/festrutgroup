import bridge from '../assets/images/gallery/bridge.jpg';
import buldozer from '../assets/images/gallery/buldozer.jpg';
import casting from '../assets/images/gallery/casting.jpg';
import fencing from '../assets/images/gallery/fencing.jpg';
import grading from '../assets/images/gallery/grading.jpg';
import inspection from '../assets/images/gallery/inspection.jpg';
import irons from '../assets/images/gallery/irons.jpg';
import mapReading from '../assets/images/gallery/map reading.jpg';
import ongoingGate from '../assets/images/gallery/ongoing gate.jpg';
import drainageMp4 from '../assets/images/gallery/drianage.mp4';
import fencingImg from '../assets/images/gallery/fencing.jpg';

const gallery = {
  pictures: [
    { id: 1, orientation: 'landscape', type: 'image', src: bridge, title: 'Bridge Construction', description: 'Bridge construction project at Festrut estate.' },
    { id: 2, orientation: 'landscape', type: 'image', src: buldozer, title: 'Site Grading', description: 'Bulldozer grading the estate terrain.' },
    { id: 3, orientation: 'landscape', type: 'image', src: casting, title: 'Concrete Casting', description: 'Concrete casting at the construction site.' },
    { id: 4, orientation: 'landscape', type: 'image', src: fencing, title: 'Fencing Project', description: 'Perimeter fencing installation.' },
    { id: 5, orientation: 'landscape', type: 'image', src: grading, title: 'Land Grading', description: 'Land grading and preparation for development.' },
    { id: 6, orientation: 'landscape', type: 'image', src: inspection, title: 'Site Inspection', description: 'Project site inspection by the engineering team.' },
    { id: 7, orientation: 'landscape', type: 'image', src: irons, title: 'Steel Reinforcement', description: 'Steel reinforcement installation for structural work.' },
    { id: 8, orientation: 'portrait', type: 'image', src: mapReading, title: 'Site Mapping', description: 'Survey and map reading for estate planning.' },
    { id: 9, orientation: 'landscape', type: 'image', src: ongoingGate, title: 'Gate Construction', description: 'Ongoing main gate construction at the estate.' },
  ],
  videos: [
    {
      id: 10,
      orientation: 'landscape',
      type: 'video',
      src: drainageMp4,
      poster: fencingImg,
      title: 'Drainage System Installation',
      description: 'Installation of drainage system at the estate.',
    },
  ],
};

export default gallery;
