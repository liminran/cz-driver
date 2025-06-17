// 交通信号图标映射，与信号文件名关联
// 预定义一个完整的交通信号图标对象
const trafficSignalImages = {
  1: require('../../assets/signals/signal1.png'),
  2: require('../../assets/signals/signal2.png'),
  3: require('../../assets/signals/signal3.png'),
  4: require('../../assets/signals/signal4.png'),
  5: require('../../assets/signals/signal5.png'),
  6: require('../../assets/signals/signal6.png'),
  7: require('../../assets/signals/signal7.png'),
  8: require('../../assets/signals/signal8.png'),
  9: require('../../assets/signals/signal9.png'),
  10: require('../../assets/signals/signal10.png'),
  11: require('../../assets/signals/signal11.png'),
  12: require('../../assets/signals/signal12.png'),
  13: require('../../assets/signals/signal13.png'),
  14: require('../../assets/signals/signal14.png'),
  15: require('../../assets/signals/signal15.png'),
  16: require('../../assets/signals/signal16.png'),
  17: require('../../assets/signals/signal17.png'),
  18: require('../../assets/signals/signal18.png'),
  19: require('../../assets/signals/signal19.png'),
  20: require('../../assets/signals/signal20.png'),
  21: require('../../assets/signals/signal21.png'),
  22: require('../../assets/signals/signal22.png'),
  23: require('../../assets/signals/signal23.png'),
  24: require('../../assets/signals/signal24.png'),
  25: require('../../assets/signals/signal25.png'),
  26: require('../../assets/signals/signal26.png'),
  27: require('../../assets/signals/signal27.png'),
  28: require('../../assets/signals/signal28.png'),
  29: require('../../assets/signals/signal29.png'),
  30: require('../../assets/signals/signal30.png'),
  31: require('../../assets/signals/signal31.png'),
  32: require('../../assets/signals/signal32.png'),
  33: require('../../assets/signals/signal33.png'),
  34: require('../../assets/signals/signal34.png'),
  35: require('../../assets/signals/signal35.png'),
  36: require('../../assets/signals/signal36.png'),
  37: require('../../assets/signals/signal37.png'),
  38: require('../../assets/signals/signal38.png'),
  39: require('../../assets/signals/signal39.png'),
  40: require('../../assets/signals/signal40.png'),
  41: require('../../assets/signals/signal41.png'),
  42: require('../../assets/signals/signal42.png'),
  43: require('../../assets/signals/signal43.png'),
  44: require('../../assets/signals/signal44.png'),
  45: require('../../assets/signals/signal45.png'),
  46: require('../../assets/signals/signal46.png'),
  47: require('../../assets/signals/signal47.png'),
  48: require('../../assets/signals/signal48.png'),
  49: require('../../assets/signals/signal49.png'),
  50: require('../../assets/signals/signal50.png'),
  51: require('../../assets/signals/signal51.png'),
  52: require('../../assets/signals/signal52.png'),
  53: require('../../assets/signals/signal53.png'),
};

// 在文件开头添加图片映射
// 预加载所有实际存在的图片
const imageAssets = {
  '2': require('../../assets/images/image2.png'),
  '3': require('../../assets/images/image3.png'),
  '4': require('../../assets/images/image4.png'),
  '5': require('../../assets/images/image5.png'),
  '6': require('../../assets/images/image6.png'),
  '7': require('../../assets/images/image7.png'),
  '8': require('../../assets/images/image8.png'),
  '9': require('../../assets/images/image9.png'),
  '20': require('../../assets/images/image20.png'),
  '21': require('../../assets/images/image21.png'),
  '22': require('../../assets/images/image22.png'),
  '23': require('../../assets/images/image23.png'),
  '24': require('../../assets/images/image24.png'),
  '25': require('../../assets/images/image25.png'),
  '26': require('../../assets/images/image26.png'),
  '27': require('../../assets/images/image27.png'),
  '28': require('../../assets/images/image28.png'),
  '29': require('../../assets/images/image29.png'),
  '30': require('../../assets/images/image30.png'),
  '31': require('../../assets/images/image31.png'),
  '32': require('../../assets/images/image32.png'),
  '33': require('../../assets/images/image33.png'),
  '34': require('../../assets/images/image34.png'),
  '35': require('../../assets/images/image35.png'),
  '36': require('../../assets/images/image36.png'),
  '37': require('../../assets/images/image37.png'),
  '38': require('../../assets/images/image38.png'),
  '39': require('../../assets/images/image39.png'),
  '40': require('../../assets/images/image40.png'),
  '41': require('../../assets/images/image41.png'),
  '42': require('../../assets/images/image42.png'),
  '43': require('../../assets/images/image43.png'),
  '44': require('../../assets/images/image44.png'),
  '45': require('../../assets/images/image45.png'),
  '46': require('../../assets/images/image46.png'),
  '47': require('../../assets/images/image47.png'),
  '48': require('../../assets/images/image48.png'),
  '49': require('../../assets/images/image49.png'),
  '50': require('../../assets/images/image50.png'),
  '51': require('../../assets/images/image51.png'),
  '52': require('../../assets/images/image52.png'),
  '53': require('../../assets/images/image53.png'),
  '54': require('../../assets/images/image54.png'),
  '55': require('../../assets/images/image55.png'),
  '56': require('../../assets/images/image56.png'),
  '57': require('../../assets/images/image57.png'),
  '58': require('../../assets/images/image58.png'),
  '59': require('../../assets/images/image59.png'),
  '60': require('../../assets/images/image60.png'),
  '61': require('../../assets/images/image61.png'),
  '62': require('../../assets/images/image62.png'),
  '63': require('../../assets/images/image63.png'),
  '64': require('../../assets/images/image64.png'),
  '65': require('../../assets/images/image65.png'),
  '66': require('../../assets/images/image66.png'),
  '67': require('../../assets/images/image67.png'),
  '68': require('../../assets/images/image68.png'),
  '69': require('../../assets/images/image69.png'),
  '70': require('../../assets/images/image70.png'),
  '71': require('../../assets/images/image71.png'),
  '72': require('../../assets/images/image72.png'),
  '73': require('../../assets/images/image73.png'),
  '74': require('../../assets/images/image74.png'),
  '75': require('../../assets/images/image75.png'),
  '76': require('../../assets/images/image76.png'),
  '77': require('../../assets/images/image77.png'),
  '78': require('../../assets/images/image78.png'),
  '79': require('../../assets/images/image79.png'),
  '80': require('../../assets/images/image80.png'),
  '81': require('../../assets/images/image81.png'),
  '82': require('../../assets/images/image82.png'),
  '83': require('../../assets/images/image83.png'),
  '84': require('../../assets/images/image84.png'),
  '85': require('../../assets/images/image85.png'),
  '86': require('../../assets/images/image86.png'),
  '87': require('../../assets/images/image87.png'),
  '88': require('../../assets/images/image88.png'),
  '89': require('../../assets/images/image89.png'),
  '90': require('../../assets/images/image90.png'),
  '91': require('../../assets/images/image91.png'),
  '92': require('../../assets/images/image92.png'),
  '93': require('../../assets/images/image93.png'),
  '94': require('../../assets/images/image94.png'),
  '95': require('../../assets/images/image95.png'),
  '96': require('../../assets/images/image96.png'),
  '97': require('../../assets/images/image97.png'),
  '98': require('../../assets/images/image98.png'),
  '99': require('../../assets/images/image99.png'),
};

/**
 * 获取问题的翻译版本
 * @param {Object} question - 题目对象
 * @param {string} language - 语言代码 (zh, en, cs, es)
 * @returns {Object} 处理后的题目对象
 */
const getQuestionTranslation = (question, language = 'zh') => {
  try {
    if (!question) {
      throw new Error('题目对象为空');
    }
    
    // 如果问题有翻译字段且包含请求的语言
    if (question.translations && question.translations[language]) {
      const translation = question.translations[language];
      
      // 验证翻译数据的完整性
      if (!translation.question || !translation.answers || !Array.isArray(translation.answers)) {
        throw new Error(`语言 ${language} 的翻译数据不完整`);
      }
      
      // 创建一个新的问题对象，保留原始问题的属性
      return {
        ...question,
        question: translation.question,
        answers: translation.answers.map(ans => ({
          text: ans.text,
          correct: ans.correct
        }))
      };
    }
    
    // 如果没有请求语言的翻译，尝试使用中文版本
    if (language !== 'zh' && question.translations && question.translations.zh) {
      console.warn(`未找到语言 ${language} 的翻译，使用中文版本`);
      const translation = question.translations.zh;
      
      return {
        ...question,
        question: translation.question,
        answers: translation.answers.map(ans => ({
          text: ans.text,
          correct: ans.correct
        }))
      };
    }
    
    // 如果没有任何翻译，抛出错误
    throw new Error(`题目 ${question.id || '未知'} 没有可用的翻译`);
  } catch (error) {
    console.error('获取题目翻译时出错:', error, question);
    // 返回一个带有错误信息的题目对象
    return {
      ...question,
      question: `[翻译错误] ${error.message}`,
      answers: question.answers || [],
      hasError: true
    };
  }
};

/**
 * 加载题目数据集
 * @param {number} setNumber - 题目集编号
 * @param {string} language - 语言代码 (zh, en, cs, es)
 * @returns {Promise<Array>} 题目数组
 */
export const loadQuestionSet = async (setNumber = 0, language = 'zh') => {
  try {
    // 动态导入JSON数据
    let questionSet;
    
    try {
      if (setNumber === 0) {
        questionSet = await import('../../assets/data/setofquestions0.json');
      } else if (setNumber === 1) {
        questionSet = await import('../../assets/data/setofquestions1.json');
      } else if (setNumber === 2) {
        questionSet = await import('../../assets/data/setofquestions2.json');
      } else {
        // 默认加载第2集的修复版本
        questionSet = await import('../../assets/data/setofquestions3.json');
      }
      console.log(`加载题库 ${setNumber}`);
    } catch (error) {
      console.warn(`加载题集 ${setNumber} 失败，使用默认题集2: ${error.message}`);
    }
    
    // 确保我们有可用的数据
    if (!questionSet) {
      throw new Error(`题库 ${setNumber} 数据为空`);
    }
    
    const questions = Array.isArray(questionSet.default) ? questionSet.default : questionSet;
    
    // 处理题目中的图片引用并应用翻译
    return questions.map(question => {
      // 获取翻译后的问题
      const translatedQuestion = getQuestionTranslation(question, language);
      
      // 确保answers字段格式正确
      if (translatedQuestion.answers) {
        translatedQuestion.options = translatedQuestion.answers.map((ans, idx) => ({
          id: String.fromCharCode(65 + idx), // A, B, C...
          text: ans.text,
          isCorrect: ans.correct
        }));
      }
      
      // 如果有picture属性，提取信号ID
      if (translatedQuestion.picture) {
        const signalMatch = translatedQuestion.picture.match(/signal(\d+)/i);
        if (signalMatch && signalMatch[1]) {
          const signalId = parseInt(signalMatch[1], 10);
          if (trafficSignalImages[signalId]) {
            translatedQuestion.signalImage = trafficSignalImages[signalId];
          }
        } else if (translatedQuestion.picture.includes('images/image')) {
          // 处理普通图片路径，如 "images/image47.png"
          try {
            const imageMatch = translatedQuestion.picture.match(/images\/image(\d+)\.png/i);
            if (imageMatch && imageMatch[1]) {
              const imageNumber = imageMatch[1];
              // 使用预加载的图片资源
              if (imageAssets[imageNumber]) {
                translatedQuestion.signalImage = imageAssets[imageNumber];
                console.log(`加载图片: image${imageNumber}.png`);
              } else {
                console.warn(`未预加载图片: image${imageNumber}.png`);
              }
            }
          } catch (error) {
            console.warn(`无法加载图片: ${translatedQuestion.picture}`, error);
          }
        }
      }
      
      // 确保所有必要的字段都存在
      return {
        ...translatedQuestion,
        id: translatedQuestion.id || `temp_${setNumber}_${Math.random().toString(36).substr(2, 9)}`,
        category: translatedQuestion.category || 'general',
        answers: translatedQuestion.answers || [],
        options: translatedQuestion.options || []
      };
    });
  } catch (error) {
    console.error(`Failed to load question set ${setNumber}:`, error);
    throw error; // 抛出错误以便上层处理
  }
};

/**
 * 加载所有题目数据集
 * @param {string} language - 语言代码 (zh, en, cs, es)
 * @returns {Promise<Array>} 合并后的题目数组
 */
export const loadAllQuestionSets = async (language = 'zh') => {
  try {
    const sets = [];
    const errors = [];
    
    // 只尝试加载已知存在的题目集
    const availableSets = [0, 1, 2, 3];
    
    for (const setNumber of availableSets) {
      try {
        console.log(`尝试加载题集 ${setNumber}...`);
        const set = await loadQuestionSet(setNumber, language);
        
        if (set && Array.isArray(set)) {
          console.log(`成功加载题集 ${setNumber}, 共 ${set.length} 题`);
          sets.push(...set);
        } else {
          console.warn(`题集 ${setNumber} 加载成功但格式无效`);
          errors.push(`题目集 ${setNumber} 格式无效`);
        }
      } catch (e) {
        console.error(`题目集 ${setNumber} 加载失败:`, e.message);
        errors.push(`题目集 ${setNumber} 加载失败: ${e.message}`);
        // 继续加载其他题集，不中断流程
      }
    }
    
    // 如果至少加载了一个题集
    if (sets.length > 0) {
      console.log(`总共加载了 ${sets.length} 道题目`);
      
      if (errors.length > 0) {
        // 记录错误但不阻止应用运行
        console.warn('加载过程中出现以下错误:', errors.join('; '));
      }
      
      return sets;
    }
    
    // 如果一个题集都没加载成功，尝试返回一个最小题集
    console.error('没有成功加载任何题集，使用备用题集');
    
    try {
      const backupQuestions = await import('../../assets/data/setofquestions3.json');
      const questions = Array.isArray(backupQuestions.default) ? backupQuestions.default : backupQuestions;
      return questions;
    } catch (backupError) {
      // 如果连备用选项都失败了，抛出累积的错误
      throw new Error(`无法加载任何题库: ${errors.join('; ')}`);
    }
  } catch (error) {
    console.error('加载所有题目集时出错:', error);
    throw error; // 让上层处理
  }
};

/**
 * 获取交通信号图标
 * @param {number} signalId - 信号ID
 * @returns {object} 图标资源
 */
export const getTrafficSignalImage = (signalId) => {
  return trafficSignalImages[signalId] || null;
};

/**
 * 根据类别获取题目
 * @param {string} category - 题目类别
 * @param {string} language - 语言代码
 * @returns {Promise<Array>} 过滤后的题目数组
 */
export const getQuestionsByCategory = async (category, language = 'zh') => {
  const allQuestions = await loadAllQuestionSets(language);
  
  if (!category || category === 'all') {
    return allQuestions;
  }
  
  return allQuestions.filter(q => q.category === category);
};

/**
 * 获取所有可用的题目分类
 * @returns {Promise<Array>} 分类数组
 */
export const getAllCategories = async () => {
  try {
    const questions = await loadAllQuestionSets();
    
    if (!Array.isArray(questions) || questions.length === 0) {
      console.warn('获取分类时发现题目数据为空或无效');
      return ['general']; // 返回默认分类
    }
    
    // 使用Set去重
    const categories = Array.from(new Set(
      questions
        .filter(q => q && q.category) // 过滤掉没有分类的题目
        .map(q => q.category)
    ));
    
    // 如果没有找到任何分类，返回一个默认值
    if (categories.length === 0) {
      console.warn('未找到任何分类，使用默认分类');
      return ['general'];
    }
    
    return categories;
  } catch (error) {
    console.error('获取分类失败:', error);
    return ['general']; // 出错时返回默认分类，避免应用崩溃
  }
};

/**
 * 获取中文分类名称
 * @param {string} category - 原始类别名
 * @returns {string} 中文分类名
 */
export const getChineseCategoryName = (category) => {
  const categoryMap = {
    'traffic_signs': '交通标志',
    'rules': '交通规则',
    'safety': '安全常识',
    'vehicle': '车辆知识',
    'emergency': '应急处理',
    'all': '所有题目'
  };
  
  return categoryMap[category] || category;
};

export default {
  loadQuestionSet,
  loadAllQuestionSets,
  getTrafficSignalImage,
  getQuestionsByCategory,
  getAllCategories,
  getChineseCategoryName,
  getQuestionTranslation
};