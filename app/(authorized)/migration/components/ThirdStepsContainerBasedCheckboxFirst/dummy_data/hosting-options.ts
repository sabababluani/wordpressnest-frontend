import Other from '../../Other/Other';
import A2Hosting from '../components/A2Hosting/A2Hosting';
import AmazonAwsFields from '../components/AmazonAwsFields/AmazonAwsFields';
import CloudWays from '../components/CloudWays/CloudWays';
import Dreamhost from '../components/Dreamhost/Dreamhost';
import Bluehost from '../components/Dreamhost/Dreamhost';
import FlywheelFields from '../components/FlywheelFields/FlywheelFields';
import GoogleCloudFields from '../components/GoogleCloudFields/GoogleCloudFields';
import LiquidWeb from '../components/LiquidWeb/LiquidWeb';
import Vultr from '../components/Vultr/Vultr';
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
];
