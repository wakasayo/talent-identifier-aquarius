import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const SystemLogs = () => {
  // TODO: Implement actual log fetching logic
  const mockLogs = [
    { timestamp: '2023-04-01 10:00:00', message: 'System started' },
    { timestamp: '2023-04-01 10:01:00', message: 'Scraping initiated for https://example.com' },
    { timestamp: '2023-04-01 10:02:00', message: 'Scraping completed successfully' },
    { timestamp: '2023-04-01 10:03:00', message: 'Analysis started' },
    { timestamp: '2023-04-01 10:04:00', message: 'Analysis completed' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>System Logs</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {mockLogs.map((log, index) => (
            <li key={index} className="text-sm">
              <span className="font-semibold">{log.timestamp}</span>: {log.message}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};