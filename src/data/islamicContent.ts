import { SourceLockedContent } from '../types';

// Registry of theological questions and topics
export interface TheologicalContentItem {
  id: string;
  category: 'Tafsir' | 'Hadith' | 'Aqeedah' | 'Fiqh' | 'Shafaat' | 'PropheticAttributes' | 'Theology';
  topic: string;
  questionText?: string;
  sourceLockedMetadata?: SourceLockedContent;
}

export const theologicalContents: TheologicalContentItem[] = [
  {
    id: 'theo-tafsir-fatihah',
    category: 'Tafsir',
    topic: 'Tafsir of Surah Al-Fatihah',
    questionText: 'What is the Tafsir of Surah Al-Fatihah?',
    sourceLockedMetadata: {
      id: 'src-tafsir-fatihah',
      sourceName: 'Pending Owner Review',
      sourceType: 'Tafsir',
      reference: 'Surah Al-Fatihah',
      exactText: '',
      language: 'en',
      approved: false,
      notes: 'Requires project owner approval.'
    }
  },
  {
    id: 'theo-aqeedah-tawhid',
    category: 'Aqeedah',
    topic: 'Explanation of Tawhid',
    questionText: 'Explain the concept of Tawhid.',
    sourceLockedMetadata: {
      id: 'src-aqeedah-tawhid',
      sourceName: 'Pending Owner Review',
      sourceType: 'Aqeedah',
      reference: 'Tawhid',
      exactText: '',
      language: 'en',
      approved: false,
      notes: 'Requires project owner approval.'
    }
  },
  {
    id: 'theo-fiqh-salah',
    category: 'Fiqh',
    topic: 'Rules of Salah',
    questionText: 'What are the pillars of Salah?',
    sourceLockedMetadata: {
      id: 'src-fiqh-salah',
      sourceName: 'Pending Owner Review',
      sourceType: 'Fiqh',
      reference: 'Salah',
      exactText: '',
      language: 'en',
      approved: false,
      notes: 'Requires project owner approval.'
    }
  },
  {
    id: 'theo-hadith-authenticity',
    category: 'Hadith',
    topic: 'Hadith Authenticity rules',
    questionText: 'How is Hadith authenticity determined?',
    sourceLockedMetadata: {
      id: 'src-hadith-rules',
      sourceName: 'Pending Owner Review',
      sourceType: 'Hadith',
      reference: 'Hadith Sciences',
      exactText: '',
      language: 'en',
      approved: false,
      notes: 'Requires project owner approval.'
    }
  },
  {
    id: 'theo-prophetic-attributes',
    category: 'PropheticAttributes',
    topic: 'Attributes of the Prophet (saws)',
    questionText: 'What are the main attributes of the Prophet?',
    sourceLockedMetadata: {
      id: 'src-prophetic-attr',
      sourceName: 'Pending Owner Review',
      sourceType: 'Other',
      reference: 'Shama\'il',
      exactText: '',
      language: 'en',
      approved: false,
      notes: 'Requires project owner approval.'
    }
  },
  {
    id: 'theo-shafaat',
    category: 'Shafaat',
    topic: 'The Concept of Shafa\'at (Intercession)',
    questionText: 'What is the concept of Shafa\'at in Islam?',
    sourceLockedMetadata: {
      id: 'src-shafaat-concept',
      sourceName: 'Pending Owner Review',
      sourceType: 'Other',
      reference: 'Intercession',
      exactText: '',
      language: 'en',
      approved: false,
      notes: 'Requires project owner approval.'
    }
  }
];

/**
 * Retrieves source-locked theological content.
 * Enforces strict governance: returns the fallback message if not approved.
 */
export function getAuthoritativeTheologicalContent(id: string, dynamicApprovals?: Record<string, boolean>): {
  text: string;
  sourceName?: string;
  reference?: string;
  approved: boolean;
} {
  const item = theologicalContents.find(t => t.id === id);
  if (!item || !item.sourceLockedMetadata) {
    return {
      text: 'QIRAZ does not currently have an approved source for this information.',
      approved: false
    };
  }

  // Check if dynamically approved by settings override
  const isApproved = item.sourceLockedMetadata.approved || (dynamicApprovals && dynamicApprovals[item.sourceLockedMetadata.id] === true);

  if (!isApproved) {
    return {
      text: 'QIRAZ does not currently have an approved source for this information.',
      approved: false
    };
  }

  return {
    text: item.sourceLockedMetadata.exactText || 'QIRAZ does not currently have an approved source for this information.',
    sourceName: item.sourceLockedMetadata.sourceName,
    reference: item.sourceLockedMetadata.reference,
    approved: true
  };
}
