import Other from '../../Other/Other';
import A2Hosting from '../components/A2Hosting/A2Hosting';
import AmazonAwsFields from '../components/AmazonAwsFields/AmazonAwsFields';
import CloudWays from '../components/CloudWays/CloudWays';
import DigitalOcean from '../components/DigitalOcean/DigitalOcean';
import Dreamhost from '../components/Dreamhost/Dreamhost';
import Bluehost from '../components/Dreamhost/Dreamhost';
import FlywheelFields from '../components/FlywheelFields/FlywheelFields';
import GoogleCloudFields from '../components/GoogleCloudFields/GoogleCloudFields';
import HostGator from '../components/HostGator/HostGator';
import Ionos from '../components/Ionos/Ionos';
import LiquidWeb from '../components/LiquidWeb/LiquidWeb';
import Pagali from '../components/Pagali/Pagali';
import Pantheon from '../components/Pantheon/Pantheon';
import Savvii from '../components/Savvii/Savvii';
import SiteGround from '../components/SiteGround/SiteGround';
import Tso from '../components/Tso/Tso';
import Vultr from '../components/Vultr/Vultr';
import WpEngine from '../components/WpEngine/WpEngine';
import { HostingOption } from '../interfaces/hostingOptions-interface';

export const HOSTING_OPTIONS: HostingOption[] = [
  { value: 'other', label: 'Other', component: Other },
  { value: 'a2hosting', label: 'A2 Hosting', component: A2Hosting },
  { value: 'amazonaws', label: 'Amazon AWS', component: AmazonAwsFields },
  { value: 'bluehost', label: 'Bluehost', component: Bluehost },
  { value: 'cloudways', label: 'Cloudways', component: CloudWays },
  { value: 'dreamhost', label: 'DreamHost', component: Dreamhost },
  { value: 'googlecloud', label: 'Google Cloud', component: GoogleCloudFields },
  { value: 'flywheel', label: 'Flywheel', component: FlywheelFields },
  { value: 'liquidweb', label: 'Liquid Web', component: LiquidWeb },
  { value: 'vultr', label: 'Vultr', component: Vultr },
  { value: 'tsp', label: 'Tso', component: Tso },
  { value: 'pagali', label: 'Pagali', component: Pagali },
  { value: 'pantheon', label: 'Pantheon', component: Pantheon },
  { value: 'siteground', label: ' SiteGround', component: SiteGround },
  { value: 'savvii', label: ' Savvii', component: Savvii },
  { value: 'Ionos', label: 'Ionos', component: Ionos },
  { value: 'digitalocean', label: 'DigitalOcean', component: DigitalOcean },
  { value: 'hostgator', label: 'HostGator', component: HostGator },
  { value: 'wpengine', label: 'WpEngine', component: WpEngine },
];
