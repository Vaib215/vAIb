"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useState } from "react";

type FormEntites = {
    inputType: string;
    url: string;
    text: string;
}

export default function Summarizer() {
    const [summary, setSummary] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState(false)

    const summarizeData = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.currentTarget);
        let formObject = Object.fromEntries(formData.entries()) as FormEntites;

        let data: { url?: string, text?: string } = {};

        if (!formObject[formObject.inputType as keyof FormEntites]) {
            alert("Please provide input as per the selected option");
        } else {
            data[formObject.inputType as keyof typeof data] = formObject[formObject.inputType as keyof FormEntites];
        }

        try {
            const response = await fetch("https://xw3w7t-5000.csb.app", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                setSummary(result.summary.trim());
            } else {
                console.error("Request failed with status: " + response.status);
            }
        } catch (error) {
            console.error("An error occurred: " + error);
        } finally {
            setLoading(false);
        }
    };

    return <div className="p-3">
        <h1 className="text-3xl font-semibold text-center">Article Summarizer</h1>
        <form onSubmit={summarizeData} className="py-2 max-w-xl mx-auto flex flex-col space-y-4">
            <div className="flex justify-center space-x-4 items-center">
                <span className='flex items-center space-x-2'>
                    <Input required defaultChecked type='radio' className="w-6" id="urlType" name="inputType" value={"url"} />
                    <Label htmlFor="urlType" className="text-xl">URL</Label>
                </span>
                <span className='flex items-center space-x-2'>
                    <Input required type='radio' className="w-6" id="textType" name="inputType" value={"text"} />
                    <Label htmlFor="textType" className="text-xl">Text</Label>
                </span>
            </div>
            <Input name="url" placeholder="Enter URL to article" />
            <small className="mx-auto text-center">OR</small>
            <Textarea name="text" placeholder="Type/paste article text here" rows={10} />
            <Button disabled={loading}>{loading ? "Loading..." : "Summarize"}</Button>
            <Textarea value={summary} placeholder="Result" rows={10} />
            <Button onClick={() => {
                if(!summary) return;
                navigator.clipboard.writeText(summary);
                alert("Copied to clipboard!")
            }} variant={"secondary"}>Copy to Clipboard</Button>
        </form>
    </div>
}