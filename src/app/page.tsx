import Link from 'next/link';
import { getAppData } from 'src/client/data/appData';
import { useFeature } from 'src/client/hooks/useFeatures';
import { Device } from 'src/shared/types/device';
import { fetch } from 'src/shared/utils/fetch';

export default async function Home() {
  console.log('get app data on home');
  const { features } = await getAppData();
  console.log('get app data on home finished');
  const linkFeature = useFeature(features, 'device_link');

  const devices = await fetch<Device[]>('/api/devices');

  return (
    <div>
      <h1>Home</h1>
      {devices.map(({ title, id }) => (
        <div key={id}>
          {linkFeature ? (
            <Link href={`/${id}`}>{title}</Link>
          ) : (
            <>
              {title}
              <Link href={`/${id}`}> Link </Link>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
