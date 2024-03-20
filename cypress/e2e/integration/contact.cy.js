describe('Testes de funcionalidades da agenda de contatos', () => {
  it('Deve adicionar um novo contato', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
    cy.get('[type="text"]').type('Novo Contato');
    cy.get('[type="email"]').type('teste@test.com');
    cy.get('[type="tel"]').type('11 977234566');
    cy.get('.adicionar').click();
  });

  it('Deve alterar um contato existente', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
    cy.get(':nth-child(2) > .sc-gueYoa > .edit').click();
    cy.contains('Novo Contato').click();
    cy.get('[type="text"]').clear().type('Contato Alterado');
    cy.contains('Salvar').click();
  });

  it('Deve remover um contato existente', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
    cy.contains('Novo Contato').click();
    cy.get(':nth-child(2) > .sc-gueYoa > .delete').click();
  });
});
