import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'GetOn-Ionic',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    allowNavigation: [
      "https://get-on.vercel.app"
    ]
  }
};

export default config;
