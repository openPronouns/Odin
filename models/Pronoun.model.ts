/** @format */

import mongoose from 'mongoose';

const MorphemesSchema = new mongoose.Schema({
	subject: String,
	object: String,
	possessiveDeterminer: String,
	possessive: String,
	reflexive: String,
	definiteArticle: String,
	indefiniteArticle: String,
	pluralSubject: String,
	pluralObject: String,
	pluralDefiniteArticle: String,
	pluralIndefiniteArticle: String,
	inflection: String,
	inflectionC: String,
});

const PronounSchema = new mongoose.Schema({
	canonicalName: String,
	name: String,
	description: String,
	language: String,
	normative: Boolean,
	plural: Boolean,
	morphemes: MorphemesSchema,
	examples: [String],
	similarTo: [String],
});

export const Pronoun = mongoose.model('pronoun', PronounSchema);