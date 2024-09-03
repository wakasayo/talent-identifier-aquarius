import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ScrapingResults = ({ results }) => {
  if (!results) {
    return <p>No scraping results available. Please scrape a website first.</p>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Scraping Results</CardTitle>
      </CardHeader>
      <CardContent>
        <pre className="whitespace-pre-wrap">{JSON.stringify(results, null, 2)}</pre>
      </CardContent>
    </Card>
  );
};