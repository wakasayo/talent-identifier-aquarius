import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AnalysisResults = ({ results }) => {
  if (!results) {
    return <p>No analysis results available. Please analyze the scraped data first.</p>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Talent Characteristics Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5">
          {results.talents.map((talent, index) => (
            <li key={index}>{talent}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};