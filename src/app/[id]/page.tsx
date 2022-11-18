import Link from 'next/link';

import { Device } from 'src/shared/types/device';
import { fetch } from 'src/shared/utils/fetch';

export default async function device(props: any) {
  console.log(props);
  const id = props.searchParams.id || props.params.id;
  console.log('fetch device ' + id);
  const post = await fetch<Device>(`/api/devices/${id}`);
  console.log('fetched device ' + id);

  return (
    <div>
      <Link href={'/'}>Home</Link>
      <h1>device {post.title}</h1>
    </div>
  );
}
