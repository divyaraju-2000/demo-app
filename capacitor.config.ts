import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'iobit.com',
  appName: 'IobiT',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
};

export default config;
