import useSWR from 'swr';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import addressState from '../store/atoms/addressAtom';

export default function getRestaurants() {
    const router = useRouter();
    const { category, q } = router.query;
    const [address] = useRecoilState(addressState)
  
    let params = [];
    if(category)
      params.push(`${params == '' ? '?' : '&'}category=${category}`);
    if(q)
      params.push(`${params == '' ? '?' : '&'}q=${q}`);
    if(address.city !== '')
      params.push(`${params == '' ? '?' : '&'}city=${encodeURIComponent(address.city)}`);
  
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const url = `${process.env.apiUrl}/api/restaurants${params.join('')}`;
    const { data, error } = useSWR(
      url,
      fetcher, 
      { revalidateOnFocus: false }
    )
  
    return { restaurants: data, isLoading: !error && !data, isError: error }
  }