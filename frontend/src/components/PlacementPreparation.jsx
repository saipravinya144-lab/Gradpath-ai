import { useEffect, useMemo, useState } from "react";

const aptitudeQuestions = [
  { category: "Quantitative Aptitude", question: "A product costs ₹800 and is discounted by 15%. What is the sale price?", options: ["₹620", "₹680", "₹700", "₹720"], answer: 1, explanation: "15% of ₹800 is ₹120. Sale price = ₹800 − ₹120 = ₹680." },
  { category: "Quantitative Aptitude", question: "A car travels 150 km in 3 hours. What is its average speed?", options: ["30 km/h", "45 km/h", "50 km/h", "60 km/h"], answer: 2, explanation: "Average speed = distance ÷ time = 150 ÷ 3 = 50 km/h." },
  { category: "Logical Reasoning", question: "Find the next number: 3, 6, 12, 24, __", options: ["30", "36", "42", "48"], answer: 3, explanation: "Each number is multiplied by 2, so the next number is 48." },
  { category: "Logical Reasoning", question: "If all Bloops are Razzies and all Razzies are Lazzies, which statement must be true?", options: ["All Lazzies are Bloops", "All Bloops are Lazzies", "No Bloops are Lazzies", "Some Razzies are not Bloops"], answer: 1, explanation: "The relationship is transitive: Bloops are Razzies, and Razzies are Lazzies, so all Bloops are Lazzies." },
  { category: "Verbal Ability", question: "Choose the grammatically correct sentence.", options: ["She have completed the task.", "She has completed the task.", "She having completed the task.", "She were completed the task."], answer: 1, explanation: "‘She’ takes ‘has’ in the present perfect tense." },
  { category: "Verbal Ability", question: "Choose the closest meaning of ‘concise’.", options: ["Confusing", "Brief and clear", "Very detailed", "Uncertain"], answer: 1, explanation: "Concise writing expresses the key information briefly and clearly." },
  { category: "Quantitative Aptitude", question: "The ratio of two numbers is 2:3 and their sum is 40. What is the smaller number?", options: ["12", "16", "20", "24"], answer: 1, explanation: "There are 5 equal parts; each is 40 ÷ 5 = 8. The smaller number is 2 × 8 = 16." },
  { category: "Logical Reasoning", question: "A is taller than B. B is taller than C. Who is the shortest?", options: ["A", "B", "C", "Cannot be determined"], answer: 2, explanation: "A > B > C in height, so C is the shortest." },
];

const checklistGroups = [
  { id: "foundations", title: "1. Core foundations", items: [["language", "Choose one main programming language and revise its fundamentals, OOP and common errors."], ["dsa", "Practise arrays, strings, hashing, searching, sorting, stacks, queues, linked lists, trees and graphs."], ["cs", "Revise DBMS/SQL, operating systems, computer networks and basic software engineering."], ["aptitude", "Practise quantitative aptitude, logical reasoning and verbal ability under a timer."]] },
  { id: "evidence", title: "2. Projects and profile", items: [["projects", "Prepare a clear explanation of each project: problem, architecture, contribution, trade-offs and testing."], ["resume", "Tailor a truthful, readable one-page resume and check every link and date."], ["github", "Pin relevant repositories, add useful READMEs and remove secrets/API keys from repositories."], ["linkedin", "Complete the headline, About section, education, skills and project links on LinkedIn."]] },
  { id: "practice", title: "3. Interview readiness", items: [["coding", "Solve coding questions consistently and explain time and space complexity aloud."], ["technical", "Practise technical questions from your chosen language, CS fundamentals and projects."], ["hr", "Prepare real STAR examples for teamwork, conflict, failure, initiative and learning."], ["mock", "Complete at least one timed mock assessment or mock interview and review mistakes."]] },
];

const companyGuides = {
  "TCS": { focus: "Check the current official hiring notice for test sections, eligibility, role and interview stages.", tasks: ["Verify current eligibility and registration dates on the official careers portal.", "Practise aptitude, reasoning, verbal ability and coding at the level specified in the notice.", "Prepare programming fundamentals, OOP, SQL/DBMS and project explanations."] },
  "Infosys": { focus: "Use the current official role description to confirm assessment format and role-specific expectations.", tasks: ["Verify the role, eligibility, assessment pattern and deadlines from official sources.", "Practise logical reasoning, quantitative aptitude, verbal ability and coding where required.", "Revise programming fundamentals, SQL and project decisions."] },
  "Wipro": { focus: "Hiring processes can differ by role and recruitment drive; rely on the current official notice.", tasks: ["Confirm the role and drive-specific eligibility on the official careers portal.", "Practise aptitude, communication and coding sections listed in the notice.", "Prepare technical fundamentals and a concise project walkthrough."] },
  "Accenture": { focus: "Assessment stages and skill expectations vary across roles and drives.", tasks: ["Read the current job description and confirm the assessment stages.", "Practise communication, reasoning and coding or technical skills required for the target role.", "Prepare examples demonstrating problem-solving, teamwork and learning agility."] },
  "Product-based companies": { focus: "Requirements differ widely. Start with the exact job description and level.", tasks: ["Analyse the job description and list its must-have skills.", "Practise DSA patterns, complexity analysis and timed coding problems.", "Prepare system/design discussions appropriate to the role and your experience."] },
  "Other / not decided": { focus: "Choose a target role first, then use the employer's official job description to build a focused plan.", tasks: ["Save the official job description and note eligibility, skills and selection stages.", "Map each required skill to a learning resource or practice task.", "Track the application deadline and revise the role-specific interview topics."] },
};

function useSavedState(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved === null ? initialValue : JSON.parse(saved);
    } catch {
      return initialValue;
    }
  });
  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (error) { console.error(`Could not save ${key}:`, error); }
  }, [key, value]);
  return [value, setValue];
}

export default function PlacementPreparation({ onBack, student, selectedRole }) {
  const [activeTab, setActiveTab] = useState("roadmap");
  const [checked, setChecked] = useSavedState("gradpathPlacementChecklist", {});
  const [answers, setAnswers] = useSavedState("gradpathAptitudeAnswers", {});
  const [company, setCompany] = useSavedState("gradpathPlacementCompany", "Other / not decided");
  const [companyChecked, setCompanyChecked] = useSavedState("gradpathCompanyChecklist", {});
  const [codingNotes, setCodingNotes] = useSavedState("gradpathCodingNotes", "");

  const answeredCount = Object.keys(answers).filter((key) => aptitudeQuestions.some((q) => q.question === key)).length;
  const correctCount = aptitudeQuestions.filter((q) => answers[q.question] === q.answer).length;
  const allChecklistItems = checklistGroups.flatMap((group) => group.items.map(([id]) => `${group.id}.${id}`));
  const checkedCount = allChecklistItems.filter((id) => checked[id]).length;
  const selectedCompanyGuide = companyGuides[company] || companyGuides["Other / not decided"];
  const companyProgressKey = useMemo(() => company.toLowerCase().replace(/[^a-z0-9]+/g, "-"), [company]);

  const tabs = [
    ["roadmap", "Placement Roadmap"], ["aptitude", "Aptitude Practice"], ["coding", "Coding Interviews"],
    ["profile", "LinkedIn & GitHub"], ["company", "Company Prep"],
  ];

  return (
    <div className="gp-career">
      <div className="gp-actions">
        <button className="gp-button" onClick={onBack}>← Career Preparation</button>
        <button className="gp-button" onClick={() => setActiveTab("roadmap")}>Placement Home</button>
      </div>
      <h2>🎯 Placement Preparation</h2>
      <p className="gp-intro">A structured workspace for campus placements: build foundations, practise assessments, prepare for interviews, improve your professional profile and tailor preparation to each employer.</p>
      <section className="gp-card">
        <strong>{student?.name ? `Your plan, ${student.name}` : "Your placement plan"}</strong>
        <p className="gp-muted">{selectedRole ? `Current career role: ${selectedRole}. Use the checklist alongside your role roadmap.` : "Choose a target role when you are ready; you can still use this general placement plan."} Progress is saved in this browser.</p>
        <div style={{ height: 10, background: "#e5e7eb", borderRadius: 99, overflow: "hidden" }}><div style={{ width: `${Math.round((checkedCount / allChecklistItems.length) * 100)}%`, height: "100%", background: "#2563eb", transition: "width .2s" }} /></div>
        <p className="gp-muted">General readiness checklist: {checkedCount} of {allChecklistItems.length} complete ({Math.round((checkedCount / allChecklistItems.length) * 100)}%).</p>
      </section>
      <div className="gp-actions" role="tablist" aria-label="Placement preparation sections">
        {tabs.map(([id, label]) => <button key={id} className={`gp-button ${activeTab === id ? "gp-primary" : ""}`} aria-pressed={activeTab === id} onClick={() => setActiveTab(id)}>{label}</button>)}
      </div>

      {activeTab === "roadmap" && <>
        <h3>Placement preparation roadmap</h3>
        <div className="gp-grid">
          <section className="gp-card"><h3>Phase 1 · Foundations</h3><p>Choose one primary language. Revise programming, OOP, DSA basics, SQL/DBMS, operating systems and computer networks according to your target roles.</p></section>
          <section className="gp-card"><h3>Phase 2 · Assessment skills</h3><p>Practise quantitative aptitude, logical reasoning, verbal ability and coding assessments. Use timed sessions and review every incorrect answer.</p></section>
          <section className="gp-card"><h3>Phase 3 · Proof of skills</h3><p>Polish two or three projects you can explain deeply. Keep your resume truthful and your GitHub repositories readable, runnable and free of secrets.</p></section>
          <section className="gp-card"><h3>Phase 4 · Interviews</h3><p>Prepare technical fundamentals, project walkthroughs and behavioral examples. Practise aloud and schedule mock interviews.</p></section>
        </div>
        <h3>Weekly starter plan</h3>
        <div className="gp-table-wrap"><table className="gp-table"><thead><tr><th>Day</th><th>Focus</th><th>Suggested session</th></tr></thead><tbody>
          <tr><td>Monday</td><td>DSA</td><td>Learn one pattern and solve 2 problems.</td></tr><tr><td>Tuesday</td><td>Aptitude</td><td>Complete a timed set and review errors.</td></tr><tr><td>Wednesday</td><td>CS fundamentals</td><td>Revise SQL/DBMS or OS/CN and answer questions aloud.</td></tr><tr><td>Thursday</td><td>Projects & profile</td><td>Improve one project README or resume bullet.</td></tr><tr><td>Friday</td><td>Interview practice</td><td>Practise technical and STAR questions.</td></tr><tr><td>Weekend</td><td>Mock + review</td><td>Complete a timed mock and plan next week's weak areas.</td></tr>
        </tbody></table></div>
        <h3>Readiness checklist</h3>
        {checklistGroups.map((group) => <section className="gp-card" key={group.id} style={{ marginBottom: 14 }}><h3>{group.title}</h3><div className="gp-checklist">{group.items.map(([id, label]) => { const key = `${group.id}.${id}`; return <label className="gp-checkline" key={key}><input type="checkbox" checked={Boolean(checked[key])} onChange={(event) => setChecked((previous) => ({ ...previous, [key]: event.target.checked }))} /><span>{label}</span></label>; })}</div></section>)}
      </>}

      {activeTab === "aptitude" && <>
        <h3>Aptitude practice</h3><p className="gp-muted">Try these sample questions across quantitative aptitude, logical reasoning and verbal ability. Select an answer to see the explanation. Your answers are saved in this browser.</p>
        <div className="gp-card"><strong>Progress: {answeredCount}/{aptitudeQuestions.length} answered</strong><p>Correct so far: {correctCount}/{answeredCount || 0}{answeredCount ? ` (${Math.round((correctCount / answeredCount) * 100)}%)` : ""}</p></div>
        {aptitudeQuestions.map((q, index) => { const selected = answers[q.question]; return <section className="gp-card" key={q.question} style={{ marginTop: 14 }}><p className="gp-muted">Question {index + 1} · {q.category}</p><h3>{q.question}</h3><div className="gp-question-options">{q.options.map((option, optionIndex) => <button key={option} className={`gp-option ${selected === optionIndex ? "gp-selected" : ""}`} aria-pressed={selected === optionIndex} onClick={() => setAnswers((previous) => ({ ...previous, [q.question]: optionIndex }))}>{String.fromCharCode(65 + optionIndex)}. {option}</button>)}</div>{selected !== undefined && <div className="gp-feedback"><strong>{selected === q.answer ? "Correct!" : "Not quite — review the method."}</strong><p>{q.explanation}</p></div>}</section>; })}
        <div className="gp-actions"><button onClick={() => setAnswers({})}>Reset aptitude answers</button></div>
      </>}

      {activeTab === "coding" && <>
        <h3>Coding interview preparation</h3><p className="gp-muted">Use this pattern checklist to organise practice. Solve problems in one language, explain the approach before coding, and analyse time and space complexity.</p>
        <div className="gp-grid">
          {[["Arrays & strings", "Two pointers", "Sliding window", "Prefix sums"], ["Hashing", "Frequency maps", "Sets", "Subarray / pair problems"], ["Searching & sorting", "Binary search", "Merge sort", "Intervals"], ["Stacks & queues", "Monotonic stack", "Queue / deque", "Parentheses"], ["Linked lists", "Reverse a list", "Fast and slow pointers", "Cycle detection"], ["Trees & graphs", "Tree traversals", "BFS / DFS", "Shortest paths"], ["Recursion & DP", "Backtracking", "Memoization", "Tabulation"], ["Interview habits", "Clarify constraints", "Test edge cases", "Explain complexity"]].map(([title, ...items]) => <section className="gp-card" key={title}><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></section>)}
        </div>
        <section className="gp-card"><h3>My coding practice notes</h3><label htmlFor="placement-coding-notes">Record problems attempted, patterns to revise, and mistakes to avoid.</label><textarea id="placement-coding-notes" rows="7" value={codingNotes} onChange={(event) => setCodingNotes(event.target.value)} placeholder="Example: Two Sum — hash map; revisit duplicate values and complexity." style={{ width: "100%", marginTop: 10 }} /><p className="gp-muted">Saved automatically in this browser.</p></section>
        <h3>Practice platforms</h3><div className="gp-link-list"><div className="gp-resource"><div><strong>LeetCode</strong><div className="gp-muted">Interview-style coding problems.</div></div><a href="https://leetcode.com/problemset/" target="_blank" rel="noreferrer">Open LeetCode ↗</a></div><div className="gp-resource"><div><strong>HackerRank</strong><div className="gp-muted">Programming and SQL practice.</div></div><a href="https://www.hackerrank.com/" target="_blank" rel="noreferrer">Open HackerRank ↗</a></div><div className="gp-resource"><div><strong>GeeksforGeeks</strong><div className="gp-muted">DSA explanations and practice.</div></div><a href="https://www.geeksforgeeks.org/" target="_blank" rel="noreferrer">Open GeeksforGeeks ↗</a></div></div>
      </>}

      {activeTab === "profile" && <>
        <h3>LinkedIn & GitHub readiness</h3><div className="gp-grid">
          <section className="gp-card"><h3>LinkedIn checklist</h3><ul><li>Use a clear photo and a headline that reflects your current focus.</li><li>Write a short About section describing your studies, interests and real evidence of skills.</li><li>Add education, relevant skills, completed certifications and project links.</li><li>Describe project outcomes truthfully; avoid unsupported claims.</li><li>Follow companies and professionals in areas you are exploring.</li></ul><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">Open LinkedIn ↗</a></section>
          <section className="gp-card"><h3>GitHub checklist</h3><ul><li>Pin your strongest repositories and use meaningful repository names.</li><li>Add a README with purpose, features, stack, setup steps, screenshots and limitations.</li><li>Include a licence when appropriate and make setup reproducible.</li><li>Remove API keys, passwords and private data; rotate any secret accidentally committed.</li><li>Keep commits understandable and projects demonstrable.</li></ul><a href="https://github.com/" target="_blank" rel="noreferrer">Open GitHub ↗</a></section>
        </div>
        <section className="gp-card"><h3>Portfolio review checklist</h3><div className="gp-checklist">{[["headline", "My headline and About section accurately describe my current skills."], ["repos", "My pinned repositories include clear READMEs and working setup instructions."], ["secrets", "I checked that no API keys, passwords or private information are published."], ["links", "My resume, LinkedIn, GitHub and project demo links work."], ["evidence", "Every skill and project claim is something I can explain in an interview."]].map(([id, label]) => <label className="gp-checkline" key={id}><input type="checkbox" checked={Boolean(checked[`profile.${id}`])} onChange={(event) => setChecked((previous) => ({ ...previous, [`profile.${id}`]: event.target.checked }))} /><span>{label}</span></label>)}</div></section>
      </>}

      {activeTab === "company" && <>
        <h3>Company-specific preparation</h3><p className="gp-muted">These are planning prompts, not guaranteed or current test patterns. Always verify the role, eligibility, assessment format and dates on the employer's official careers site.</p>
        <div className="gp-field" style={{ maxWidth: 450 }}><label htmlFor="placement-company">Choose a company group</label><select id="placement-company" value={company} onChange={(event) => setCompany(event.target.value)}>{Object.keys(companyGuides).map((name) => <option key={name}>{name}</option>)}</select></div>
        <section className="gp-card" style={{ marginTop: 16 }}><h3>{company}</h3><p>{selectedCompanyGuide.focus}</p><div className="gp-checklist">{selectedCompanyGuide.tasks.map((task, index) => { const key = `${companyProgressKey}.${index}`; return <label className="gp-checkline" key={key}><input type="checkbox" checked={Boolean(companyChecked[key])} onChange={(event) => setCompanyChecked((previous) => ({ ...previous, [key]: event.target.checked }))} /><span>{task}</span></label>; })}</div><p className="gp-muted">Company checklist progress: {selectedCompanyGuide.tasks.filter((_, index) => companyChecked[`${companyProgressKey}.${index}`]).length}/{selectedCompanyGuide.tasks.length}</p></section>
        <div className="gp-link-list"><div className="gp-resource"><div><strong>Official company careers</strong><div className="gp-muted">Start with the employer's own job description and hiring notice.</div></div><a href="https://www.google.com/search?q=official+company+careers+student+jobs" target="_blank" rel="noreferrer">Find official careers pages ↗</a></div></div>
      </>}
      <div className="gp-actions"><button onClick={onBack}>← Career Preparation</button><button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑ Back to top</button></div>
      <p className="gp-muted">Saved checklists, answers and notes stay in this browser on this device. They are not synced to the student database.</p>
    </div>
  );
}
