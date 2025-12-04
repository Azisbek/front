'use client';

import { useState, useEffect } from 'react';
import { apiClient, WebsiteData } from '@/lib/api';

export function useWebsiteData() {
  const [data, setData] = useState<WebsiteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const websiteData = await apiClient.getWebsiteData();
        setData(websiteData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Ошибка загрузки данных'));
        console.error('Error fetching website data:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}

