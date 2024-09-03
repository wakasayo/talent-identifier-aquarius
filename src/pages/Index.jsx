import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { ScrapingResults } from '@/components/ScrapingResults';
import { AnalysisResults } from '@/components/AnalysisResults';
import { SystemLogs } from '@/components/SystemLogs';

const Index = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [scrapingResults, setScrapingResults] = useState(null);
  const [analysisResults, setAnalysisResults] = useState(null);
  const { toast } = useToast();

  const handleScrape = async () => {
    setIsLoading(true);
    try {
      // TODO: Implement actual scraping logic
      const mockScrapingResults = { data: "Scraped content from " + url };
      setScrapingResults(mockScrapingResults);
      toast({
        title: "Scraping Completed",
        description: "Website content has been successfully scraped.",
      });
    } catch (error) {
      toast({
        title: "Scraping Failed",
        description: "An error occurred while scraping the website.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnalyze = async () => {
    setIsLoading(true);
    try {
      // TODO: Implement actual Dify API integration and analysis
      const mockAnalysisResults = { talents: ["Communication", "Leadership", "Problem Solving"] };
      setAnalysisResults(mockAnalysisResults);
      toast({
        title: "Analysis Completed",
        description: "Talent characteristics have been analyzed.",
      });
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "An error occurred during the analysis.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Corporate Website Scraping and Talent Analysis</h1>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Enter Company Website URL</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <Button onClick={handleScrape} disabled={isLoading}>
              {isLoading ? 'Scraping...' : 'Scrape'}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="scraping" className="w-full">
        <TabsList>
          <TabsTrigger value="scraping">Scraping Results</TabsTrigger>
          <TabsTrigger value="analysis">Analysis Results</TabsTrigger>
          <TabsTrigger value="logs">System Logs</TabsTrigger>
        </TabsList>
        <TabsContent value="scraping">
          <ScrapingResults results={scrapingResults} />
        </TabsContent>
        <TabsContent value="analysis">
          <AnalysisResults results={analysisResults} />
          <Button onClick={handleAnalyze} disabled={isLoading || !scrapingResults} className="mt-4">
            {isLoading ? 'Analyzing...' : 'Analyze Talent Characteristics'}
          </Button>
        </TabsContent>
        <TabsContent value="logs">
          <SystemLogs />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;