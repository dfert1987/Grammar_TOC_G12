import React, { useState, useEffect } from 'react';
import TableBanner from './TableElements/TableBanner';
import InteractiveGrammarElements from './TableElements/InteractiveGrammarElements';
import AdditionalResources from './TableElements/AdditionalResources';
import { Sentence } from '../Assets/Data/Sentence';
import { POS } from '../Assets/Data/POS';
import { Phrase } from '../Assets/Data/Phrase';
import { Clause } from '../Assets/Data/Clause';
import { Agreement } from '../Assets/Data/Agreement';
import { Pronouns } from '../Assets/Data/Pronouns';
import { Clear } from '../Assets/Data/Clear';
import { Verbs } from '../Assets/Data/Verbs';
import { UMods } from '../Assets/Data/UMods';
import { PMods } from '../Assets/Data/PMods';
import { Glossary } from '../Assets/Data/Glossary';
import { Capitals } from '../Assets/Data/Capitals';
import { Punctuation } from '../Assets/Data/Punctuation';
import { PunctuationII } from '../Assets/Data/PunctuationII';
import { Spelling } from '../Assets/Data/Spelling';
import '../Styles/Table.css';

const SentenceModule = () => {
    const [sentenceData, setSentenceData] = useState([]);
    const [posData, setPOSData] = useState([]);
    const [phraseData, setPhraseData] = useState([]);
    const [clauseData, setClauseData] = useState([]);
    const [agreementData, setAgreementData] = useState([]);
    const [pronounsData, setPronounsData] = useState([]);
    const [clearData, setClearData] = useState([]);
    const [verbsData, setVerbsData] = useState([]);
    const [uModsData, setUModsData] = useState([]);
    const [pModsData, setPModsData] = useState([]);
    const [glossaryData, setGlossaryData] = useState([]);
    const [capitalsData, setCapitalsData] = useState([]);
    const [punctuationData, setPunctuationData] = useState([]);
    const [punctuationDataII, setPunctuationDataII] = useState([]);
    const [spellingData, setSpellingData] = useState([]);

    useEffect(() => {
        setSentenceData(Sentence);
        setPOSData(POS);
        setPhraseData(Phrase);
        setClauseData(Clause);
        setAgreementData(Agreement);
        setPronounsData(Pronouns);
        setClearData(Clear);
        setVerbsData(Verbs);
        setUModsData(UMods);
        setPModsData(PMods);
        setGlossaryData(Glossary);
        setCapitalsData(Capitals);
        setPunctuationData(Punctuation);
        setPunctuationDataII(PunctuationII);
        setSpellingData(Spelling);
    }, []);

    return (
        <div className='whole-table'>
            <table className='table-container'>
                <TableBanner data={sentenceData} />
                <section className='two-columns'>
                    <InteractiveGrammarElements
                        className='interactive'
                        data={sentenceData}
                    />
                    <AdditionalResources
                        className='additional'
                        data={sentenceData}
                    />
                </section>
            </table>
            <table className='table-container'>
                <TableBanner data={posData} />
                <section className='two-columns'>
                    <InteractiveGrammarElements
                        className='interactive'
                        data={posData}
                    />
                    <AdditionalResources
                        className='additional'
                        data={posData}
                    />
                </section>
            </table>
            <table className='table-container'>
                <TableBanner data={phraseData} />
                <section className='two-columns'>
                    <InteractiveGrammarElements
                        className='interactive'
                        data={phraseData}
                    />
                    <AdditionalResources
                        className='additional'
                        data={phraseData}
                    />
                </section>
            </table>
            <table className='table-container'>
                <TableBanner data={clauseData} />
                <section className='two-columns'>
                    <InteractiveGrammarElements
                        className='interactive'
                        data={clauseData}
                    />
                    <AdditionalResources
                        className='additional'
                        data={clauseData}
                    />
                </section>
            </table>
            <table className='table-container'>
                <TableBanner data={agreementData} />
                <section className='two-columns'>
                    <InteractiveGrammarElements
                        className='interactive'
                        data={agreementData}
                    />
                    <AdditionalResources
                        className='additional'
                        data={agreementData}
                    />
                </section>
            </table>
            <table className='table-container'>
                <TableBanner data={pronounsData} />
                <section className='two-columns'>
                    <InteractiveGrammarElements
                        className='interactive'
                        data={pronounsData}
                    />
                    <AdditionalResources
                        className='additional'
                        data={pronounsData}
                    />
                </section>
            </table>
            <table className='table-container'>
                <TableBanner data={clearData} />
                <section className='two-columns'>
                    <InteractiveGrammarElements
                        className='interactive'
                        data={clearData}
                    />
                    <AdditionalResources
                        className='additional'
                        data={clearData}
                    />
                </section>
            </table>
            <table className='table-container'>
                <TableBanner data={verbsData} />
                <section className='two-columns'>
                    <InteractiveGrammarElements
                        className='interactive'
                        data={verbsData}
                    />
                    <AdditionalResources
                        className='additional'
                        data={verbsData}
                    />
                </section>
            </table>
            <table className='table-container'>
                <TableBanner data={uModsData} />
                <section className='two-columns'>
                    <InteractiveGrammarElements
                        className='interactive'
                        data={uModsData}
                    />
                    <AdditionalResources
                        className='additional'
                        data={uModsData}
                    />
                </section>
            </table>
            <table className='table-container'>
                <TableBanner data={pModsData} />
                <section className='two-columns'>
                    <InteractiveGrammarElements
                        className='interactive'
                        data={pModsData}
                    />
                    <AdditionalResources
                        className='additional'
                        data={pModsData}
                    />
                </section>
            </table>
            <table className='table-container'>
                <TableBanner data={glossaryData} />
                <section className='two-columns'>
                    <InteractiveGrammarElements
                        className='interactive'
                        data={glossaryData}
                    />
                    <AdditionalResources
                        className='additional'
                        data={glossaryData}
                    />
                </section>
            </table>
            <table className='table-container'>
                <TableBanner data={capitalsData} />
                <section className='two-columns'>
                    <InteractiveGrammarElements
                        className='interactive'
                        data={capitalsData}
                    />
                    <AdditionalResources
                        className='additional'
                        data={capitalsData}
                    />
                </section>
            </table>
            <table className='table-container'>
                <TableBanner data={punctuationData} />
                <section className='two-columns'>
                    <InteractiveGrammarElements
                        className='interactive'
                        data={punctuationData}
                    />
                    <AdditionalResources
                        className='additional'
                        data={punctuationData}
                    />
                </section>
            </table>
            <table className='table-container'>
                <TableBanner data={punctuationDataII} />
                <section className='two-columns'>
                    <InteractiveGrammarElements
                        className='interactive'
                        data={punctuationDataII}
                    />
                    <AdditionalResources
                        className='additional'
                        data={punctuationDataII}
                    />
                </section>
            </table>
            <table className='table-container'>
                <TableBanner data={spellingData} />
                <section className='two-columns'>
                    <InteractiveGrammarElements
                        className='interactive'
                        data={spellingData}
                    />
                    <AdditionalResources
                        className='additional'
                        data={spellingData}
                    />
                </section>
            </table>
        </div>
    );
};

export default SentenceModule;
