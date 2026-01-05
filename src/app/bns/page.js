"use client";
import { useState } from 'react';
import styles from './bns.module.css';

const professionalData = [
    // CRIMES AGAINST BODY
    { category: "CRIMES AGAINST BODY" },
    { offence: "Murder", ipc: "302", bns: "103", description: "Intentional causing of death" },
    { offence: "Culpable Homicide", ipc: "304", bns: "105", description: "Death without full mens rea" },
    { offence: "Attempt to Murder", ipc: "307", bns: "109", description: "Attempt causing grave danger" },
    { offence: "Causing Hurt", ipc: "323", bns: "115", description: "Voluntary bodily injury" },
    { offence: "Grievous Hurt", ipc: "325", bns: "117", description: "Serious bodily harm" },
    { offence: "Acid Attack", ipc: "326A", bns: "124", description: "Permanent disfigurement" },
    { offence: "Attempt Acid Attack", ipc: "326B", bns: "125", description: "Attempt to cause injury" },

    // CRIMES AGAINST WOMEN & CHILDREN
    { category: "CRIMES AGAINST WOMEN & CHILDREN" },
    { offence: "Rape", ipc: "376", bns: "64", description: "Sexual assault" },
    { offence: "Gang Rape", ipc: "376D", bns: "70", description: "Sexual assault by group" },
    { offence: "Sexual Harassment", ipc: "354A", bns: "75", description: "Physical/Verbal misconduct" },
    { offence: "Stalking", ipc: "354D", bns: "78", description: "Repeated harassment" },
    { offence: "Dowry Death", ipc: "304B", bns: "80", description: "Death due to dowry cruelty" },
    { offence: "Cruelty by Husband", ipc: "498A", bns: "85", description: "Domestic cruelty" },
    { offence: "Child Trafficking", ipc: "370", bns: "143", description: "Exploitation of minors" },

    // CRIMES AGAINST PROPERTY
    { category: "CRIMES AGAINST PROPERTY" },
    { offence: "Theft", ipc: "379", bns: "303", description: "Dishonest removal of property" },
    { offence: "Robbery", ipc: "390", bns: "309", description: "Theft with violence" },
    { offence: "Dacoity", ipc: "395", bns: "310", description: "Robbery by 5+ persons" },
    { offence: "Criminal Breach of Trust", ipc: "405", bns: "316", description: "Misuse of entrusted property" },
    { offence: "Cheating", ipc: "420", bns: "318", description: "Fraudulent inducement" },
    { offence: "Extortion", ipc: "383", bns: "308", description: "Property by threat" },

    // CRIMES AGAINST STATE
    { category: "CRIMES AGAINST STATE" },
    { offence: "Sedition (Modified)", ipc: "124A", bns: "152", description: "Acts against sovereignty" },
    { offence: "Waging War", ipc: "121", bns: "147", description: "Armed rebellion" },
    { offence: "Terrorist Act", ipc: "—", bns: "113", description: "Acts threatening national security" },
    { offence: "Unlawful Assembly", ipc: "141", bns: "187", description: "Group with criminal object" },
    { offence: "Rioting", ipc: "147", bns: "189", description: "Violence by assembly" },

    // FORGERY & DOCUMENT OFFENCES
    { category: "FORGERY & DOCUMENT OFFENCES" },
    { offence: "Forgery", ipc: "463", bns: "336", description: "Creation of false documents" },
    { offence: "Forged Document Use", ipc: "471", bns: "338", description: "Using forged records" },
    { offence: "Cheating by Personation", ipc: "416", bns: "319", description: "Identity deception" },
    { offence: "Electronic Forgery", ipc: "—", bns: "339", description: "Digital record forgery" },

    // PUBLIC ORDER & MORALITY
    { category: "PUBLIC ORDER & MORALITY" },
    { offence: "Criminal Intimidation", ipc: "506", bns: "351", description: "Threat to cause harm" },
    { offence: "Public Nuisance", ipc: "268", bns: "270", description: "Public inconvenience" },
    { offence: "Obscenity", ipc: "294", bns: "294", description: "Public obscenity clarified" },
    { offence: "Defamation", ipc: "500", bns: "356", description: "Injury to reputation" },
];

export default function BNSPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = professionalData.filter(item => {
        if (item.category) return true; // Keep headers for now, will filter out empty sections below if needed
        return (
            item.offence.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.ipc.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.bns.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    // Clean up empty headers after filtering
    const cleanData = filteredData.reduce((acc, item, index, array) => {
        if (item.category) {
            // Check if next item exists and is not a category
            const nextItem = array[index + 1];
            if (nextItem && !nextItem.category) {
                acc.push(item);
            }
        } else {
            acc.push(item);
        }
        return acc;
    }, []);


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>BNS Professional Guide</h1>
                <p className={styles.subtitle}>
                    Bharatiya Nyaya Sanhita (BNS) vs Indian Penal Code (IPC) <br />
                    A Daily Reference Tool for Advocates, Judges, and Police Officers.
                </p>
            </div>

            <div className={styles.searchWrapper}>
                <input
                    type="text"
                    placeholder="Search by Offence, IPC, BNS, or Keyword..."
                    className={styles.searchBox}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th style={{ width: '25%' }}>Offence</th>
                            <th style={{ width: '15%' }}>Old IPC</th>
                            <th style={{ width: '15%' }}>New BNS</th>
                            <th style={{ width: '45%' }}>Legal Essence / Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cleanData.length > 0 ? cleanData.map((item, index) => (
                            item.category ? (
                                <tr key={index} className={styles.categoryRow}>
                                    <td colSpan="4">{item.category}</td>
                                </tr>
                            ) : (
                                <tr key={index}>
                                    <td data-label="Offence" className={styles.offenceName}>{item.offence}</td>
                                    <td data-label="Old IPC"><span className={styles.ipcBadge}>{item.ipc}</span></td>
                                    <td data-label="New BNS"><span className={styles.bnsBadge}>{item.bns}</span></td>
                                    <td data-label="Description" className={styles.description}>{item.description}</td>
                                </tr>
                            )
                        )) : (
                            <tr>
                                <td colSpan="4" className={styles.emptyState}>
                                    No provisions found matching "{searchTerm}"
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className={styles.disclaimer}>
                <p><strong>Disclaimer:</strong> This guide is for informational and reference purposes only. It is not legal advice.
                    Please refer to the official Gazette notifications for authoritative text.</p>
            </div>
        </div>
    );
}
