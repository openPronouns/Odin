import { morphemes } from ".";

export type pronouns = {
    canonicalName: string
    name: string
    description: string
    language: string
    normative: boolean
    plural: boolean
    morphemes: morphemes
    examples: [string]
    similarTo: [string]
}