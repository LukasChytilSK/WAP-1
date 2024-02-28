'use strict';

/**
 * @file WAP - 1. projekt
 * @module translation
 * @author Lukas Chytil (xchyti13)
 */

/**
 * @description Genetic code for translation of mRNA to amino acids
 */
const geneticCode =
{
    "UUU": "Fenylalanin",
    "UUC": "Fenylalanin",
    "UUA": "Leucin",
    "UUG": "Leucin",
    "CUU": "Leucin",
    "CUC": "Leucin",
    "CUA": "Leucin",
    "CUG": "Leucin",
    "AUU": "Isoleucin",
    "AUC": "Isoleucin",
    "AUA": "Isoleucin",
    "AUG": "Methionin",
    "GUU": "Valin",
    "GUC": "Valin",
    "GUA": "Valin",
    "GUG": "Valin",
    "UCU": "Serin",
    "UCC": "Serin",
    "UCA": "Serin",
    "UCG": "Serin",
    "CCU": "Prolin",
    "CCC": "Prolin",
    "CCA": "Prolin",
    "CCG": "Prolin",
    "ACU": "Threonin",
    "ACC": "Threonin",
    "ACA": "Threonin",
    "ACG": "Threonin",
    "GCU": "Alanin",
    "GCC": "Alanin",
    "GCA": "Alanin",
    "GCG": "Alanin",
    "UAU": "Tyrosin",
    "UAC": "Tyrosin",
    "UAA": "STOP",
    "UAG": "STOP",
    "CAU": "Histidin",
    "CAC": "Histidin",
    "CAA": "Glutamin",
    "CAG": "Glutamin",
    "AAU": "Asparagin",
    "AAC": "Asparagin",
    "AAA": "Lysin",
    "AAG": "Lysin",
    "GAU": "Kyselina asparagová",
    "GAC": "Kyselina asparagová",
    "GAA": "Kyselina glutamová",
    "GAG": "Kyselina glutamová",
    "UGU": "Cystein",
    "UGC": "Cystein",
    "UGA": "STOP",
    "UGG": "Tryptofan",
    "CGU": "Arginin",
    "CGC": "Arginin",
    "CGA": "Arginin",
    "CGG": "Arginin",
    "AGU": "Serin",
    "AGC": "Serin",
    "AGA": "Arginin",
    "AGG": "Arginin",
    "GGU": "Glycin",
    "GGC": "Glycin",
    "GGA": "Glycin",
    "GGG": "Glycin",
};


/**
 * @description Prototype object for amino acids
 */
BaseAminoAcid.prototype.leucin = new BaseAminoAcid("Leucin");
BaseAminoAcid.prototype.isoleucin = new BaseAminoAcid("Isoleucin");
BaseAminoAcid.prototype.methionin = new BaseAminoAcid("Methionin");
BaseAminoAcid.prototype.valin = new BaseAminoAcid("Valin");
BaseAminoAcid.prototype.serin = new BaseAminoAcid("Serin");
BaseAminoAcid.prototype.prolin = new BaseAminoAcid("Prolin");
BaseAminoAcid.prototype.threonin = new BaseAminoAcid("Threonin");
BaseAminoAcid.prototype.alanin = new BaseAminoAcid("Alanin");
BaseAminoAcid.prototype.tyrosin = new BaseAminoAcid("Tyrosin");
BaseAminoAcid.prototype.histidin = new BaseAminoAcid("Histidin");
BaseAminoAcid.prototype.glutamin = new BaseAminoAcid("Glutamin");
BaseAminoAcid.prototype.asparagin = new BaseAminoAcid("Asparagin");
BaseAminoAcid.prototype.lysin = new BaseAminoAcid("Lysin");
BaseAminoAcid.prototype.kyselina_asparagova = new BaseAminoAcid("Kyselina asparagová");
BaseAminoAcid.prototype.kyselina_glutamova = new BaseAminoAcid("Kyselina glutamová");
BaseAminoAcid.prototype.cystein = new BaseAminoAcid("Cystein");
BaseAminoAcid.prototype.tryptofan = new BaseAminoAcid("Tryptofan");
BaseAminoAcid.prototype.arginin = new BaseAminoAcid("Arginin");
BaseAminoAcid.prototype.glycin = new BaseAminoAcid("Glycin");
BaseAminoAcid.prototype.fenylalanin = new BaseAminoAcid("Fenylalanin");


/**
 * @constructor
 * @description 		Constructor of the base class of amino acids
 * @param {string} name	Name of amino acid
 */
export function BaseAminoAcid(name)
{
	this.name = name;
}



/**
 * @description Error class for translation errors
 * @param {string} message	Error message
 */
export class TranslationError extends Error
{
	constructor(message)
	{
		super(message);
		this.name = "TranslationError";
	}
}


/**
 * 
 * @param {string} aminoAcidName	Name of amino acid, which is used to create prototype object
 * @returns 						Prototype object of amino acid
 */
function createPrototypeObject(aminoAcidName)
{
	switch(aminoAcidName)
	{
		case "Leucin":
			return Object.create(BaseAminoAcid.prototype.leucin);
		case "Isoleucin":
			return Object.create(BaseAminoAcid.prototype.isoleucin);
		case "Methionin":
			return Object.create(BaseAminoAcid.prototype.methionin);
		case "Valin":
			return Object.create(BaseAminoAcid.prototype.valin);
		case "Serin":
			return Object.create(BaseAminoAcid.prototype.serin);
		case "Prolin":
			return Object.create(BaseAminoAcid.prototype.prolin);
		case "Threonin":
			return Object.create(BaseAminoAcid.prototype.threonin);
		case "Alanin":
			return Object.create(BaseAminoAcid.prototype.alanin);
		case "Tyrosin":
			return Object.create(BaseAminoAcid.prototype.tyrosin);
		case "Histidin":
			return Object.create(BaseAminoAcid.prototype.histidin);
		case "Glutamin":
			return Object.create(BaseAminoAcid.prototype.glutamin);
		case "Asparagin":
			return Object.create(BaseAminoAcid.prototype.asparagin);
		case "Lysin":
			return Object.create(BaseAminoAcid.prototype.lysin);
		case "Kyselina asparagová":
			return Object.create(BaseAminoAcid.prototype.kyselina_asparagova);
		case "Kyselina glutamová":
			return Object.create(BaseAminoAcid.prototype.kyselina_glutamova);
		case "Cystein":
			return Object.create(BaseAminoAcid.prototype.cystein);
		case "Tryptofan":
			return Object.create(BaseAminoAcid.prototype.tryptofan);
		case "Arginin":
			return Object.create(BaseAminoAcid.prototype.arginin);
		case "Glycin":
			return Object.create(BaseAminoAcid.prototype.glycin);
		case "Fenylalanin":
			return Object.create(BaseAminoAcid.prototype.fenylalanin);
		default:
			throw new TranslationError(`Unknown amino acid: ${aminoAcidName} while creating prototype object.`);
	}
}

/**
 * @description 		Generator function for translating mRNA to amino acids. For each codon, it creates a prototype object of amino acid. It stops translation when it reaches a stop codon. It throws an error if it encounters an unknown codon or if the length of mRNA is invalid.
 * @param {string} mRNA 	mRNA sequence, which is split into codons and translated into amino acids
 */
export function* translate(mRNA)
{
	let index = 0;
	while (index < mRNA.length)
	{
		// get next codon, 3 characters
		var codon = mRNA.slice(index, index + 3);

        // check if codon has valid length
		if(codon.length < 3)
		{
			throw new TranslationError(`Invalid length of mRNA: ${mRNA}`);
		}

        var amino_acid = geneticCode[codon];

		// termination codon, stop translation
		if (amino_acid === "STOP")
        {
            break;
        }

		// unknown codon
		if ( amino_acid === undefined )
		{
			throw new TranslationError(`Invalid codon: ${codon}`);
		}

		// create and return amino acid object
		yield createPrototypeObject(amino_acid);
		index += 3;
	}
}