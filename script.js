const storageKey = 'faculdade-organizacao';
const defaultSubjects = ['Bioquímica', 'Controle de qualidade de alimentos', 'Educação alimentar e nutricional', 'Ética', 'Microbiologia básica', 'Parasitologia', 'Sistemas alimentares', 'Sistemas do corpo humano', 'Técnica dietética'];
const biochemistryTopics = ['pH, tampões e equilíbrio ácido-base simples', 'Estrutura e funções de proteínas', 'Enzimas e cinética enzimática', 'Estrutura e funções de carboidratos', 'Estrutura e funções de lipídeos', 'Glicólise e fermentação', 'Metabolismo do glicogênio: glicogenólise e glicogênese', 'Gliconeogênese', 'Ciclo dos ácidos tricarboxílicos', 'Cadeia respiratória e fosforilação oxidativa', 'Degradação de ácidos graxos e cetogênese', 'Biossíntese de ácidos graxos e triglicerídeos'];
const microbiologyTopics = ['T1 - Estrutura, fisiologia e genética de bactérias.', 'T2 - Estrutura, fisiologia e genética dos fungos.', 'T3 - Fundamentos de virologia.', 'T6 - Patogênese microbiana.', 'T7 - Terapêutica, resistência antimicrobiana e desafios da Saúde Única.', 'T4 - Biossegurança e controle de crescimento microbiano: métodos físicos e químicos.', 'T5 - Ecologia microbiana: microbiota humana e contaminação de ambientes e alimentos.'];
const ethicsTopics = ['Honestidade.', 'Ética das virtudes.', 'Ética do dever.', 'Direitos humanos: diversidade e vulnerabilidade.', 'Cooperação.', 'Utilitarismo.', 'Ética da responsabilidade.', 'Meio ambiente.', 'RA1 - Relacionar os modelos éticos definidos a situações práticas, conforme os princípios da honestidade e da cooperação.', 'RA2 - Elaborar planos de ação relacionados a situações teórico-práticas fundamentados nos modelos éticos.'];
const bodySystemsTopics = ['Tema 1 - Homeostase e integração funcional do organismo.', 'Tema 2 - Comunicação e coordenação: bases da integração neural.', 'Tema 3 - Comunicação e modulação das funções: sistema endócrino e integração neuroendócrina.', 'Tema 4 - Sistemas efetores: movimento e resposta mecânica.', 'Tema 5 - Sistemas de digestão, absorção, transporte, distribuição e trocas com o meio externo.', 'Tema 6 - Regulação hidroeletrolítica, ácido-base e excreção.', 'RA1 - Analisar o organismo humano como um sistema funcional integrado, relacionando a organização anatômica, os mecanismos fisiológicos de regulação e as respostas adaptativas na manutenção da homeostase.', 'RA2 - Interpretar respostas do corpo humano em situações reais ou simuladas, articulando conhecimentos anatomofisiológicos para analisar adaptações ao ambiente, desequilíbrios funcionais e variações ao longo do desenvolvimento humano.'];
const dieteticTechniqueTopics = ['TE 1 - Identificação dos diferentes grupos de alimentos.', 'TE 2 - Técnicas de manipulação e métodos de mensuração de alimentos, utilizando fatores de correção e de cocção.', 'TE 3 - Técnicas de pré-preparo e métodos de cocção de preparações para registro em fichas técnicas de preparo para coletividades sadias e com necessidades alimentares especiais.', 'TE 4 - Seleção e adequação de preparos para coletividades sadias e com necessidades alimentares especiais: métodos de seleção, cocção, conservação e uso de alimentos.', 'TE 5 - Modificações de consistências de alimentos.', 'RA1 - Selecionar alimentos considerando suas características físicas, sensoriais e regionais.', 'RA2 - Aplicar técnicas de mensuração em alimentos e bebidas, estabelecendo indicadores de preparo na elaboração de fichas técnicas de preparo.', 'RA3 - Distinguir as diversas técnicas de pré-preparo e cocção e suas aplicações práticas para coletividades sadias e com necessidades alimentares especiais.'];
const parasitologyTopics = ['1 - Introdução à Parasitologia: conceitos e definições básicas.', '2 - Protozoários transmitidos por água e/ou alimentos: Giardia lamblia, Entamoeba histolytica, Toxoplasma gondii e Cryptosporidium sp.', '3 - Helmintos de importância alimentar: Ascaris lumbricoides, Taenia solium, Taenia saginata e Trichuris trichiura.', '4 - Parasitoses emergentes e zoonóticas: Anisakis sp. e Cyclospora cayetanensis.', '5 - Surtos de parasitoses: doenças transmitidas por alimentos (DTAs).', '6 - Diagnóstico das parasitoses intestinais.', 'RA1 - Planejar estratégias de prevenção e controle de parasitoses com base em evidências científicas e no contexto clínico.', 'RA2 - Analisar os principais agentes parasitários transmitidos por alimentos contaminados, relacionando morfologia, fisiopatologia, patogenicidade e manifestações clínicas.', 'RA3 - Reconhecer as deficiências nutricionais provocadas pelas ações dos parasitas no organismo.'];
const nutritionEducationTopics = ['TE 1 - Fundamentos da Educação Alimentar e Nutricional.', 'TE 2 - Comportamento alimentar e comunicação em saúde.', 'TE 3 - Planejamento e desenvolvimento de ações de Educação Alimentar e Nutricional para diferentes fases da vida e cenários de atuação.', 'TE 4 - Comunicação, aconselhamento nutricional e avaliação de intervenções educativas.', 'RA 1 - Aplicar os fundamentos da Educação Alimentar e Nutricional no planejamento de ações educativas coerentes com os princípios da Educação Popular, do Marco de Referência de EAN e da promoção da alimentação adequada e saudável.', 'RA 2 - Analisar os fatores que influenciam o comportamento alimentar para selecionar estratégias educativas adequadas aos diferentes indivíduos, grupos e contextos de atuação profissional.', 'RA 3 - Planejar ações e desenvolver recursos de Educação Alimentar e Nutricional para indivíduos e grupos, considerando as diferentes fases da vida, os cenários de atuação e os princípios da Educação Popular em Saúde.', 'RA 4 - Executar e avaliar estratégias de Educação Alimentar e Nutricional e aconselhamento nutricional em situações simuladas, utilizando comunicação efetiva e postura ética.'];
const foodSystemsTopics = ['TE 1 - Formação dos sistemas alimentares, ambientes alimentares e do fenômeno da Sindemia Global.', 'TE 2 - Sistemas alimentares saudáveis e sustentáveis.', 'RA 1 - Analisar os sistemas alimentares contemporâneos em suas múltiplas dimensões, correlacionando-os com a Saúde Planetária, a Sindemia Global e os determinantes sociais.', 'RA 2 - Reconhecer práticas promotoras de sistemas alimentares saudáveis e sustentáveis, integrando a biodiversidade e a eficiência no uso de recursos na atuação profissional.'];
const foodQualityTopics = ['TE 1 - Controle de qualidade de alimentos.', 'TE 2 - Qualidade e segurança de alimentos.', 'TE 3 - Perigos e doenças transmitidas por alimentos.', 'TE 4 - Padrões de Identidade e Qualidade de alimentos e legislação aplicada.', 'T5 - Avaliação da qualidade e verificação da conformidade dos alimentos.', 'RA1 - Analisar os fatores que influenciam a qualidade e a segurança dos alimentos ao longo da cadeia produtiva, relacionando perigos físicos, químicos e biológicos, crescimento microbiano e doenças transmitidas por alimentos.', 'RA2 - Avaliar a qualidade dos alimentos por meio de critérios físicos, químicos, microbiológicos e sensoriais estabelecidos nos Padrões de Identidade e Qualidade e na legislação vigente.'];
const defaultTasks = [
  { title: 'TDE 2', subject: 'Bioquímica', date: '2026-09-06', done: false },
  { title: 'TDE 2', subject: 'Microbiologia básica', date: '2026-09-07', done: false },
  { title: 'TDE 3 - início', subject: 'Sistemas do corpo humano', date: '2026-09-07', done: false },
  { title: 'TDE 1', subject: 'Sistemas alimentares', date: '2026-09-09', done: false },
  { title: 'TDE 3 - início', subject: 'Controle de qualidade de alimentos', date: '2026-09-09', done: false },
  { title: 'TDE 3 - fim', subject: 'Sistemas do corpo humano', date: '2026-09-11', done: false },
  { title: 'Seminário', subject: 'Educação alimentar e nutricional', date: '2026-09-24', done: false },
  { title: 'Seminário', subject: 'Educação alimentar e nutricional', date: '2026-09-25', done: false },
  { title: 'TDE 3', subject: 'Bioquímica', date: '2026-09-27', done: false },
  { title: 'TDE 3 - fim', subject: 'Controle de qualidade de alimentos', date: '2026-09-29', done: false },
  { title: 'TDE 4 - início', subject: 'Controle de qualidade de alimentos', date: '2026-09-29', done: false },
  { title: 'TDE 3', subject: 'Microbiologia básica', date: '2026-10-12', done: false },
  { title: 'TDE 4 - início', subject: 'Sistemas do corpo humano', date: '2026-10-19', done: false },
  { title: 'Etapa 3', subject: 'Educação alimentar e nutricional', date: '2026-10-22', done: false },
  { title: 'Etapa 3', subject: 'Educação alimentar e nutricional', date: '2026-10-23', done: false },
  { title: 'TDE 4 - fim', subject: 'Sistemas do corpo humano', date: '2026-10-26', done: false },
  { title: 'TDE 5 - início', subject: 'Sistemas do corpo humano', date: '2026-10-26', done: false },
  { title: 'Elaboração do vídeo', subject: 'Ética', date: '2026-10-27', done: false },
  { title: 'Concurso culinário', subject: 'Sistemas alimentares', date: '2026-10-28', done: false },
  { title: 'Etapa 4', subject: 'Educação alimentar e nutricional', date: '2026-10-29', done: false },
  { title: 'Etapa 4', subject: 'Educação alimentar e nutricional', date: '2026-10-30', done: false },
  { title: 'TDE 5 - fim', subject: 'Sistemas do corpo humano', date: '2026-10-30', done: false },
  { title: 'TDE 4', subject: 'Microbiologia básica', date: '2026-11-02', done: false },
  { title: 'Apresentação do vídeo', subject: 'Ética', date: '2026-11-03', done: false },
  { title: 'Visita aos agricultores', subject: 'Sistemas alimentares', date: '2026-11-04', done: false },
  { title: 'Etapa 5', subject: 'Educação alimentar e nutricional', date: '2026-11-05', done: false },
  { title: 'Etapa 5', subject: 'Educação alimentar e nutricional', date: '2026-11-06', done: false },
  { title: 'TDE 4', subject: 'Bioquímica', date: '2026-11-15', done: false },
  { title: 'TDE 2', subject: 'Sistemas alimentares', date: '2026-11-18', done: false },
  { title: 'TDE 4', subject: 'Bioquímica', date: '2026-11-22', done: false },
  { title: 'TDE 5', subject: 'Bioquímica', date: '2026-11-25', done: false }
];
const defaultStudies = [
  { subject: 'Bioquímica', day: 'Segunda-feira', time: '14:00', type: 'Estudo', focus: 'Revisão dos conteúdos e exercícios' },
  { subject: 'Controle de qualidade de alimentos', day: 'Segunda-feira', time: '15:30', type: 'Estudo', focus: 'TDEs, qualidade e segurança dos alimentos' },
  { subject: 'Educação alimentar e nutricional', day: 'Terça-feira', time: '14:00', type: 'Estudo', focus: 'Leitura dos temas e preparação das etapas' },
  { subject: 'Ética', day: 'Terça-feira', time: '15:30', type: 'Estudo', focus: 'Revisão e preparação do vídeo' },
  { subject: 'Sistemas alimentares', day: 'Quarta-feira', time: '14:00', type: 'Estudo', focus: 'TDEs e preparação das atividades' },
  { subject: 'Técnica dietética', day: 'Quarta-feira', time: '15:30', type: 'Estudo', focus: 'Revisão teórica e prática' },
  { subject: 'Microbiologia básica', day: 'Quinta-feira', time: '14:00', type: 'Estudo', focus: 'TDEs e revisão para a prova' },
  { subject: 'Parasitologia', day: 'Quinta-feira', time: '15:30', type: 'Estudo', focus: 'Revisão dos conteúdos e exercícios' },
  { subject: 'Sistemas do corpo humano', day: 'Sexta-feira', time: '14:00', type: 'Estudo', focus: 'Revisão das aulas teórica e prática' }
];
const defaultExams = [
  { title: 'P1 - Educacao alimentar e nutricional', subject: 'Educacao alimentar e nutricional', type: 'P1', date: '2026-08-28' },
  { title: 'P2 - Educacao alimentar e nutricional', subject: 'Educacao alimentar e nutricional', type: 'P2', date: '2026-10-01' },
  { title: 'P1 - Tecnica dietetica', subject: 'Tecnica dietetica', type: 'P1', date: '2026-09-02' },
  { title: 'P2 - Tecnica dietetica', subject: 'Tecnica dietetica', type: 'P2', date: '2026-10-13' },
  { title: 'P1 - Controle de qualidade de alimentos', subject: 'Controle de qualidade de alimentos', type: 'P1', date: '2026-09-14' },
  { title: 'P2 - Controle de qualidade de alimentos', subject: 'Controle de qualidade de alimentos', type: 'P2', date: '2026-11-16' },
  { title: 'P1 - Parasitologia', subject: 'Parasitologia', type: 'P1', date: '2026-09-21' },
  { title: 'P2 - Parasitologia', subject: 'Parasitologia', type: 'P2', date: '2026-11-11' },
  { title: 'P1 - Sistemas do corpo humano pratico', subject: 'Sistemas do corpo humano pratico', type: 'P1', date: '2026-09-22' },
  { title: 'P2 - Sistemas do corpo humano pratico', subject: 'Sistemas do corpo humano pratico', type: 'P2', date: '2026-11-24' },
  { title: 'P1 - Microbiologia basica', subject: 'Microbiologia basica', type: 'P1', date: '2026-09-21' },
  { title: 'P2 - Microbiologia basica', subject: 'Microbiologia basica', type: 'P2', date: '2026-11-23' },
  { title: 'P1 - Sistemas do corpo humano teorico', subject: 'Sistemas do corpo humano teorico', type: 'P1', date: '2026-09-25' },
  { title: 'P2 - Sistemas do corpo humano teorico', subject: 'Sistemas do corpo humano teorico', type: 'P2', date: '2026-11-27' },
  { title: 'P1 - Bioquimica', subject: 'Bioquimica', type: 'P1', date: '2026-10-05' },
  { title: 'P2 - Bioquimica', subject: 'Bioquimica', type: 'P2', date: '2026-11-23' },
  { title: 'P1 - Etica', subject: 'Etica', type: 'P1', date: '2026-10-14' },
  { title: 'P2 - Etica', subject: 'Etica', type: 'P2', date: '2026-10-20' },
  { title: 'P1 - Sistemas alimentares', subject: 'Sistemas alimentares', type: 'P1', date: '2026-10-21' }
];
const savedData = JSON.parse(localStorage.getItem(storageKey) || '{}');
const state = {
  subjects: savedData.subjects?.length ? savedData.subjects : defaultSubjects,
  tasks: savedData.tasks?.length ? savedData.tasks : defaultTasks,
  exams: savedData.exams?.length ? savedData.exams : defaultExams,
  studies: savedData.studies?.some(study => study.day) ? savedData.studies.filter(study => study.day) : defaultStudies,
  biochemistry: savedData.biochemistry || biochemistryTopics.map(title => ({ title, done: false })),
  microbiology: savedData.microbiology || microbiologyTopics.map(title => ({ title, done: false })),
  ethics: savedData.ethics || ethicsTopics.map(title => ({ title, done: false })),
  bodySystems: savedData.bodySystems || bodySystemsTopics.map(title => ({ title, done: false })),
  dieteticTechnique: savedData.dieteticTechnique || dieteticTechniqueTopics.map(title => ({ title, done: false })),
  parasitology: savedData.parasitology || parasitologyTopics.map(title => ({ title, done: false })),
  nutritionEducation: nutritionEducationTopics.map(title => ({ title, done: savedData.nutritionEducation?.find(item => item.title === title)?.done || false })),
  foodSystems: savedData.foodSystems || foodSystemsTopics.map(title => ({ title, done: false })),
  foodQuality: savedData.foodQuality || foodQualityTopics.map(title => ({ title, done: false }))
};
state.exams.forEach(exam => {
  if (exam.subject === 'Tecnica dietetica' && exam.type === 'P1') exam.completed = true;
});

const save = () => localStorage.setItem(storageKey, JSON.stringify(state));
const byId = id => document.getElementById(id);

function refreshSubjectOptions() {
  ['taskSubject', 'examSubject'].forEach(id => {
    const select = byId(id);
    select.innerHTML = '<option value="Geral">Geral</option>' + state.subjects.map(subject => `<option value="${subject}">${subject}</option>`).join('');
  });
}

function render() {
  refreshSubjectOptions();
  byId('subjectCount').textContent = `${state.subjects.length}/9`;
  byId('openTaskCount').textContent = state.tasks.filter(task => !task.done).length;
  byId('examCount').textContent = state.exams.length;
  byId('taskTotal').textContent = `${state.tasks.length} ${state.tasks.length === 1 ? 'item' : 'itens'}`;

  const completed = state.tasks.filter(task => task.done).length;
  const percentage = state.tasks.length ? completed / state.tasks.length * 100 : 0;
  byId('weeklyProgress').style.width = `${percentage}%`;
  byId('progressLabel').textContent = `${completed} de ${state.tasks.length} tarefas concluídas`;
  byId('weeklyFocus').textContent = state.tasks.find(task => !task.done)?.title || 'Sua lista esta em dia. Aproveite para revisar uma materia.';

  const orderedTasks = state.tasks.map((task, index) => ({ task, index })).sort((first, second) => (first.task.date || '9999-12-31').localeCompare(second.task.date || '9999-12-31'));
  byId('taskList').innerHTML = orderedTasks.map(item => `<li class="item ${item.task.done ? 'done' : ''}"><input type="checkbox" ${item.task.done ? 'checked' : ''} data-task="${item.index}" aria-label="Concluir tarefa"><span class="item-title">${item.task.title}</span><span class="item-meta">${item.task.subject}${item.task.date ? ` · ${new Date(`${item.task.date}T12:00:00`).toLocaleDateString('pt-BR')}` : ''}</span><button class="item-delete" data-delete-task="${item.index}" aria-label="Excluir tarefa">x</button></li>`).join('');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const orderedExams = state.exams.map((exam, index) => ({ exam, index })).sort((first, second) => first.exam.date.localeCompare(second.exam.date));
  const nextExamIndex = orderedExams.findIndex(item => !item.exam.completed && new Date(`${item.exam.date}T12:00:00`) >= today);
  byId('examList').innerHTML = orderedExams.map((item, position) => {
    const examDate = new Date(`${item.exam.date}T12:00:00`);
    const days = Math.ceil((examDate - today) / 86400000);
    const countdown = item.exam.completed || days < 0 ? 'Concluida' : days === 0 ? 'Hoje' : days === 1 ? 'Amanha' : `Em ${days} dias`;
    return `<li class="exam-item ${position === nextExamIndex ? 'next-exam' : ''}"><div class="exam-date"><strong>${item.exam.type || 'Prova'}</strong>${examDate.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '')}</div><div class="exam-details"><strong>${item.exam.title}</strong><small>${item.exam.subject} · ${examDate.toLocaleDateString('pt-BR')}</small></div><span class="exam-countdown">${countdown}</span><button class="item-delete" data-delete-exam="${item.index}" aria-label="Excluir prova">x</button></li>`;
  }).join('');
  byId('emptyExams').hidden = orderedExams.length > 0;
  const upcomingCount = orderedExams.filter(item => !item.exam.completed && new Date(`${item.exam.date}T12:00:00`) >= today).length;
  byId('examSummary').textContent = upcomingCount ? `${upcomingCount} ${upcomingCount === 1 ? 'prova futura' : 'provas futuras'}` : 'todas concluidas';
  const dayOrder = ['segunda-feira', 'terca-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabado', 'domingo'];
  const normalizeDay = day => day.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  state.studies.sort((first, second) => {
    const dayDifference = dayOrder.indexOf(normalizeDay(first.day)) - dayOrder.indexOf(normalizeDay(second.day));
    return dayDifference || first.subject.localeCompare(second.subject, 'pt-BR');
  });
  byId('studyList').innerHTML = state.studies.map((study, index) => `<li class="study-item"><span class="study-day">${study.day}</span><div class="study-details"><strong>${study.subject}</strong></div><button class="item-delete" data-delete-study="${index}" aria-label="Excluir matéria da agenda">x</button></li>`).join('');
  byId('emptyStudies').hidden = state.studies.length > 0;
  byId('subjectList').innerHTML = state.subjects.map((subject, index) => `<div class="subject"><span>${subject}</span><button data-delete-subject="${index}" aria-label="Excluir materia">x</button></div>`).join('');
  byId('emptySubjects').hidden = state.subjects.length > 0;
  const completedTopics = state.biochemistry.filter(topic => topic.done).length;
  byId('biochemistryProgress').textContent = `${completedTopics} de ${state.biochemistry.length} concluídos`;
  byId('biochemistryTopics').innerHTML = state.biochemistry.map((topic, index) => `<li class="topic ${topic.done ? 'done' : ''}"><label><input type="checkbox" data-topic="${index}" ${topic.done ? 'checked' : ''}>${topic.title}<span class="done-label">Marcar como feito</span></label></li>`).join('');
  const completedMicrobiology = state.microbiology.filter(topic => topic.done).length;
  byId('microbiologyProgress').textContent = `${completedMicrobiology} de ${state.microbiology.length} concluídos`;
  byId('microbiologyTopics').innerHTML = state.microbiology.map((topic, index) => `<li class="topic ${topic.done ? 'done' : ''}"><label><input type="checkbox" data-microbiology="${index}" ${topic.done ? 'checked' : ''}>${topic.title}<span class="done-label">Marcar como feito</span></label></li>`).join('');
  const completedEthics = state.ethics.filter(topic => topic.done).length;
  byId('ethicsProgress').textContent = `${completedEthics} de ${state.ethics.length} concluídos`;
  byId('ethicsTopics').innerHTML = state.ethics.map((topic, index) => `<li class="topic ${topic.done ? 'done' : ''}"><label><input type="checkbox" data-ethics="${index}" ${topic.done ? 'checked' : ''}>${topic.title}<span class="done-label">Marcar como feito</span></label></li>`).join('');
  const completedBodySystems = state.bodySystems.filter(topic => topic.done).length;
  byId('bodySystemsProgress').textContent = `${completedBodySystems} de ${state.bodySystems.length} concluídos`;
  byId('bodySystemsTopics').innerHTML = state.bodySystems.map((topic, index) => `<li class="topic ${topic.done ? 'done' : ''}"><label><input type="checkbox" data-body-systems="${index}" ${topic.done ? 'checked' : ''}>${topic.title}<span class="done-label">Marcar como feito</span></label></li>`).join('');
  const completedDieteticTechnique = state.dieteticTechnique.filter(topic => topic.done).length;
  byId('dieteticTechniqueProgress').textContent = `${completedDieteticTechnique} de ${state.dieteticTechnique.length} concluídos`;
  byId('dieteticTechniqueTopics').innerHTML = state.dieteticTechnique.map((topic, index) => `<li class="topic ${topic.done ? 'done' : ''}"><label><input type="checkbox" data-dietetic-technique="${index}" ${topic.done ? 'checked' : ''}>${topic.title}<span class="done-label">Marcar como feito</span></label></li>`).join('');
  const completedParasitology = state.parasitology.filter(topic => topic.done).length;
  byId('parasitologyProgress').textContent = `${completedParasitology} de ${state.parasitology.length} concluídos`;
  byId('parasitologyTopics').innerHTML = state.parasitology.map((topic, index) => `<li class="topic ${topic.done ? 'done' : ''}"><label><input type="checkbox" data-parasitology="${index}" ${topic.done ? 'checked' : ''}>${topic.title}<span class="done-label">Marcar como feito</span></label></li>`).join('');
  const completedNutritionEducation = state.nutritionEducation.filter(topic => topic.done).length;
  byId('nutritionEducationProgress').textContent = `${completedNutritionEducation} de ${state.nutritionEducation.length} concluídos`;
  byId('nutritionEducationTopics').innerHTML = state.nutritionEducation.map((topic, index) => `<li class="topic ${topic.done ? 'done' : ''}"><label><input type="checkbox" data-nutrition-education="${index}" ${topic.done ? 'checked' : ''}>${topic.title}<span class="done-label">Marcar como feito</span></label></li>`).join('');
  const completedFoodSystems = state.foodSystems.filter(topic => topic.done).length;
  byId('foodSystemsProgress').textContent = `${completedFoodSystems} de ${state.foodSystems.length} concluídos`;
  byId('foodSystemsTopics').innerHTML = state.foodSystems.map((topic, index) => `<li class="topic ${topic.done ? 'done' : ''}"><label><input type="checkbox" data-food-systems="${index}" ${topic.done ? 'checked' : ''}>${topic.title}<span class="done-label">Marcar como feito</span></label></li>`).join('');
  const completedFoodQuality = state.foodQuality.filter(topic => topic.done).length;
  byId('foodQualityProgress').textContent = `${completedFoodQuality} de ${state.foodQuality.length} concluídos`;
  byId('foodQualityTopics').innerHTML = state.foodQuality.map((topic, index) => `<li class="topic ${topic.done ? 'done' : ''}"><label><input type="checkbox" data-food-quality="${index}" ${topic.done ? 'checked' : ''}>${topic.title}<span class="done-label">Marcar como feito</span></label></li>`).join('');
  save();
}

byId('subjectForm').addEventListener('submit', event => {
  event.preventDefault();
  const input = byId('subjectInput');
  if (!state.subjects.includes(input.value.trim())) state.subjects.push(input.value.trim());
  input.value = '';
  render();
});

byId('taskForm').addEventListener('submit', event => {
  event.preventDefault();
  state.tasks.push({ title: byId('taskInput').value.trim(), subject: byId('taskSubject').value, date: byId('taskDate').value, done: false });
  byId('taskInput').value = '';
  render();
});

byId('examForm').addEventListener('submit', event => {
  event.preventDefault();
  state.exams.push({ title: byId('examInput').value.trim(), subject: byId('examSubject').value, type: byId('examType').value, date: byId('examDate').value });
  byId('examInput').value = '';
  byId('examDate').value = '';
  render();
});

byId('studyForm').addEventListener('submit', event => {
  event.preventDefault();
  state.studies.push({ subject: byId('studySubject').value.trim(), day: byId('studyDay').value });
  byId('studyForm').reset();
  render();
});

document.addEventListener('click', event => {
  const target = event.target;
  if (target.dataset.deleteTask) state.tasks.splice(Number(target.dataset.deleteTask), 1);
  else if (target.dataset.deleteExam) state.exams.splice(Number(target.dataset.deleteExam), 1);
  else if (target.dataset.deleteStudy) state.studies.splice(Number(target.dataset.deleteStudy), 1);
  else if (target.dataset.deleteSubject) state.subjects.splice(Number(target.dataset.deleteSubject), 1);
  else return;
  render();
});

document.addEventListener('change', event => {
  if (event.target.dataset.task) state.tasks[Number(event.target.dataset.task)].done = event.target.checked;
  if (event.target.dataset.topic) state.biochemistry[Number(event.target.dataset.topic)].done = event.target.checked;
  if (event.target.dataset.microbiology) state.microbiology[Number(event.target.dataset.microbiology)].done = event.target.checked;
  if (event.target.dataset.ethics) state.ethics[Number(event.target.dataset.ethics)].done = event.target.checked;
  if (event.target.dataset.bodySystems) state.bodySystems[Number(event.target.dataset.bodySystems)].done = event.target.checked;
  if (event.target.dataset.dieteticTechnique) state.dieteticTechnique[Number(event.target.dataset.dieteticTechnique)].done = event.target.checked;
  if (event.target.dataset.parasitology) state.parasitology[Number(event.target.dataset.parasitology)].done = event.target.checked;
  if (event.target.dataset.nutritionEducation) state.nutritionEducation[Number(event.target.dataset.nutritionEducation)].done = event.target.checked;
  if (event.target.dataset.foodSystems) state.foodSystems[Number(event.target.dataset.foodSystems)].done = event.target.checked;
  if (event.target.dataset.foodQuality) state.foodQuality[Number(event.target.dataset.foodQuality)].done = event.target.checked;
  render();
});

render();
