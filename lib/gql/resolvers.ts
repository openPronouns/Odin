import { Pronoun } from "../../models";

export const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        getPronouns: async () => {
            return await Pronoun.find();
        }
    },
    Mutation: {
        createPronoun: async (parent, args, context, info) => {
            const { en_pronoun, es_pronoun, fr_pronoun, it_pronoun, pt_pronoun, eo_pronoun } = args.pronoun;
            const pronoun = new Pronoun({
                en_pronoun,
                es_pronoun,
                fr_pronoun,
                it_pronoun,
                pt_pronoun,
                eo_pronoun
            });
            await pronoun.save();
            return pronoun;
        }
    }
};